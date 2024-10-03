import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";
import jwtauthenticator from "../middlewares/jwt-authenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", jwtauthenticator(), authorizer("ADM"), login);

router.use(jwtauthenticator);
router.use(authorizer("ADMINISTRATOR"));

// crud usuário

export default router;
