import { Router } from "express";
import {
  createUser,
  getRegisterInfo,
  getUserInfo,
  logout,
} from "../controllers/Auth.js";

const router = Router();

router.post("/login", getUserInfo);
router.post("/register", createUser);
router.get("/get-register-info", getRegisterInfo);
router.post("/logout", logout);

export default router;
