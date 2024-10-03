import jwtService from "../services/jwt-service.js";
import User from "../models/user-model.js";

const jwtauthenticator = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")(1);
    const user = jwtService.verifyAcessToken(token);

    if (user) {
      req.user = User.findById(user._id).exec();
      next();
    } else {
      throw new Error("");
    }
    throw new Error();
  } catch (error) {
    res.sendStatus(401);
  }
};
export default jwtauthenticator;
