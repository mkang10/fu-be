import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:user_id", userController.getUserInfo);
router.delete("/profile/:user_id", userController.deleteUser);
router.post("/profile/update-avatar/:user_id", userController.updateAvatar);
router.post("/profile/update-info/:user_id", userController.updateInfo);

router.get("/members", userController.getAllUsers);
router.get("/students", userController.getAllStudents);
router.get("/mentors", userController.getAllMentors);

router.get("/profile-info/:user_id", userController.getUserProfile);
router.patch("/profile/update-bio/:user_id", userController.updateBio);

router.get("/departments", userController.getAllDepartments);
router.get("/majors", userController.getALlMajors);



export default router;
