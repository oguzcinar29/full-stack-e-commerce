import db from "../Postgre.js";

let temp = "ASC";
export const getProducts = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM products ORDER BY price ${temp}`
    );
    const products = result.rows;
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

export const getRadioValue = (req, res) => {
  temp = req.body.value;
  let cat = req.body.category.toLowerCase();
  if (cat === "electronics") {
    cat = "electronic";
  } else if (cat === "miscellaneous") {
    cat = "misc";
  } else {
  }
  res.redirect(`/${cat.toLowerCase()}`);
};
