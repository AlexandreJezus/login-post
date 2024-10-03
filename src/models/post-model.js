import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    text: {
      type: Schema.Types.String,
      required: true,
    },
    User: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;
