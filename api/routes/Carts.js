import { Router } from "express";
import { getCartItems, makePayment } from "../controllers/Cart.js";

const router = Router();

router.post("/get-cart-items", getCartItems);
router.post("/create-checkout-session", makePayment);

export default router;
