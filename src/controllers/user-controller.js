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

export const store = async (req, res) => {
  try {
    const content = await User.create(req.body);

    res.status(201).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    const content = await User.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await User.findById(req.params.id).exec();

    res.json(content);
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

export const update = async (req, res) => {
  try {
    const user = req.user._id;
    const { text } = req.body;

    const content = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        user,
      },
      { text }
    ).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const user = req.user._id;

    const content = await Post.findOneAndDelete({
      _id: req.params.id,
      user,
    }).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const followUnfollow = async (req, res) => {
  try {
    if (!req.user.following.includes(req.params.id))
      req.user.following.push(req.params.id);
    else {
      const index = req.user.following.indexOf(req.params.id);
      req.user.following.splice(index, 1);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
