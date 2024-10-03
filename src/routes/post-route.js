import { Router } from "express";
import { store, index } from "../controllers/post-controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";
import jwtauthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

// Public routes
router.get("/", index);
router.get("/:id", show);

// Private routes
router.use(jwtauthenticator);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
