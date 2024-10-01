import jwtService from "../services/jwt-service.js";

const jwtauthenticator = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")(1);
    const user = jwtService.verifyAcessToken(token);

    if (user) {
      req.user = user;
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
