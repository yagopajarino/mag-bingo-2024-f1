import express from "express";
import controller from "../controllers/jugadores.js";

const router = express.Router();

router.get("/", controller.jugadores);
router.get("/check", controller.checkImages);
router.post("/foto", controller.foto);

export default router;
