import { Router } from "express";
import {
  signup,
  login,
  destroy,
  index,
  show,
  store,
  update,
  followUnfollow,
} from "../controllers/user-controller.js";
import jwtauthenticator from "../middlewares/jwt-authenticator.js";
import authorizer from "../middlewares/authorizer.js";
import { destroy, update } from "../controllers/post-controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", jwtauthenticator(), authorizer("ADM"), login);

router.use(jwtauthenticator);

router.put("/follow-unfollow/:id", followUnfollow);

router.use(authorizer("ADMINISTRATOR", "SUPPORT"));

router.get("/", index);
router.get("/", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

// crud usuário

export default router;
