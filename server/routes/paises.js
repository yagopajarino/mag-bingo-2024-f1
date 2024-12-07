import express from "express";
import controller from "../controllers/paises.js";

const router = express.Router();

router.get("/", controller.paises);
router.get("/check", controller.checkImages);
router.post("/foto", controller.foto);

export default router;
