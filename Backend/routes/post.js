const express = require("express");
const router = express.Router();
const Posts = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const post = await Posts.find();
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const singlePost = await Posts.findById(req.params.postId);
    res.json(singlePost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
