import bcrypt from "bcrypt";
import db from "../Postgre.js";
import jwt from "jsonwebtoken";
const saltRounds = 10;

let emailUsed = false;
let emailExist = false;
let passCheckh = false;
let currentUser1 = [];

export const getUserInfo = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM users");
    const data = result.rows;
    const findUser = data.find((item) => item.email === email);

    if (typeof findUser !== "undefined") {
      emailExist = true;
      console.log(findUser);
      bcrypt.compare(password, findUser.password, function (err, result) {
        if (result) {
          passCheckh = false;
          emailExist = false;
          const token = jwt.sign({ id: findUser.id }, "jwtkey");
          const { password, ...other } = findUser;
          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200);
          currentUser1 = findUser;
          res.redirect("/");
        } else {
          passCheckh = true;
          emailExist = false;
          res.redirect("/login");
        }
      });
    } else {
      emailExist = true;
      passCheckh = false;
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM users");
    const data = result.rows;
    const findUser = data.find((item) => item.email === email);
    if (typeof findUser === "undefined") {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        await db.query(
          "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)",
          [username, email, hash]
        );
      });
      emailUsed = false;
      res.redirect("/login");
    } else {
      emailUsed = true;
      res.redirect("/register");
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = (req, res) => {
  currentUser1 = null;
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200);
  res.redirect("/");
};

export const getRegisterInfo = (req, res) => {
  res.json({ emailUsed, emailExist, passCheckh, currentUser1 });
};
