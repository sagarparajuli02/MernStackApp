import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
});

const PostMessage = mongoose.model("posts_collections", postSchema);

export default PostMessage;
