import User from "../models/user-model.js";
import jwtServices from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = jwtServices.generateAcesssToken(user);

    res.status(201).json(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password,
    }).exec();

    if (user && user.isValidPassword(password)) {
      const token = jwtServices.generateAcesssToken(user);
      res.json(token);
    } else {
      res.status(404).json({
        error: "Email or password invalid.",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
