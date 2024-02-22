import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routes/Auths.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/Products.js";
import cartRouter from "./routes/Carts.js";
import axios from "axios";
import db from "./Postgre.js";
import Stripe from "stripe";
import doteenv from "dotenv";
doteenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET);

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(port, () => {
  console.log("The server is listening on port 5000");
});

// app.use("/api/delete-category", async (req, res) => {
//   await db.query("DELETE FROM products");
// });

// app.get("/api/get-products", async (req, res) => {
//   try {
//     const result = await axios.get("https://api.escuelajs.co/api/v1/products");
//     const data = result.data;
//     const imgArr = data.map((item) => {
//       const newImg = [];
//       for (let i = 0; i < item.images.length; i++) {
//         if (
//           item.images[i].includes("[") ||
//           item.images[i].includes("]") ||
//           item.images[i].includes('"')
//         ) {
//           const newItem = item.images[i].replace(/[\[\]"]/g, "");
//           newImg.push(newItem);
//         } else {
//           newImg.push(item.images[i]);
//         }
//       }
//       return newImg;
//     });

//     console.log(imgArr[0]);
//     console.log(data[0]);
//     try {
//       for (let i = 0; i < data.length; i++) {
//         await db.query(
//           "INSERT INTO products(category,price,descr,product_name,img) VALUES ($1,$2,$3,$4,$5)",
//           [
//             data[i].category.name,
//             data[i].price,
//             data[i].description,
//             data[i].title,
//             imgArr[i],
//           ]
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });
