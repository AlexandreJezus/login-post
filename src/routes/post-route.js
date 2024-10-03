import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
} from "../controllers/post-controller.js";
import jwtauthenticator from "../middlewares/jwt-authenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

// Public routes
router.use(jwtauthenticator);
// Private routes
router.get("/", index);
router.get("/:id", show);
router.use(jwtauthenticator, authorizer);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
