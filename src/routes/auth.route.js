import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", authController.login);

router.get("/verify", authController.verify);

router.post("/register", authController.register);

router.patch("/reset-password", authController.resetPassword);

router.post("/forgot-password", authController.forgotPassword);

router.patch("/change-password", authController.changePassword);

export default router;
