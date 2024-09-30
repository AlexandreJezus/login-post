import { Router } from "express";
import { store, index } from "../controllers/post-controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

router.post("/", jwtAuthenticator, store);
router.get("/", index);

export default router;
