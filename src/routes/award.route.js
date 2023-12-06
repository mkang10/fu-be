import express from "express";
import awardsController from "../controllers/awards.controller.js";
const router = express.Router();

router.get("/get-top10-like", awardsController.getTop10LikeOfUser);
router.get("/get-top10-cmt", awardsController.getTop10CmtOfUser);
router.get("/getAwardModerator", awardsController.getAwardModerator);

export default router;
