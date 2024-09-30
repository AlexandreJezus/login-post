import Post from "../models/post-model.js";
import jwtServices from "../service/jwt-service.js";

export const store = async (req, res) => {
  try {
    const content = await Post.create({
      text: req.body.text,
      ref: req.body.findById(User),
    });
    const token = jwtServices.generateAcesssToken(user);
    res.status(201).res.json(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Post.find({
      rentedBy: undefined,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};
