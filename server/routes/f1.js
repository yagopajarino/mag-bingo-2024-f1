import express from "express";
import controller from "../controllers/f1.js";

const router = express.Router();

router.get("/", controller.f1);
router.get("/check", controller.checkImages);
router.post("/foto", controller.foto);

export default router;
