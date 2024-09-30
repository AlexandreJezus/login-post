import { Schema, model } from "mongoose";

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

postSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

postSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Post = model("Post", postSchema);

export default Post;
