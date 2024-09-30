import { Router } from "express";
import { store, index } from "../controllers/post-controller.js";

const router = Router();

router.get("/", index);
router.post("/", store);

export default router;
