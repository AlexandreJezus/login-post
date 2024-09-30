import Post from "../models/post-model.js";

export const store = async (req, res) => {
  try {
    const content = await Post.create({
      text: req.body.text,
      ref: req.user._id,
    });
    res.status(201).res.json(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Post.find({
      postedBy: undefined,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};
