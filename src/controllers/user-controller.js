import User from "../models/user-model.js";
import jwtServices from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwtServices.generateAcesssToken(user);

    res.status(201).json(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();

    if (user && (await user.isValidPassword(req.body.password))) {
      const token = jwtServices.generateAcesssToken(user);
      res.json(token);
    } else {
      res.status(404).json({
        error: "Email or password invalid.",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
