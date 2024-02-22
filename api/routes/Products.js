import { Router } from "express";
import { getProducts, getRadioValue } from "../controllers/Product.js";

const router = Router();

router.get("/get-products", getProducts);
router.post("/radio-value", getRadioValue);

export default router;
