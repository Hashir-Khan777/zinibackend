const express = require("express");
const { BlogModel } = require("../models/index.models");
const {
  MulterService,
  CloudinaryService,
} = require("../services/index.services");

const BlogRouter = express.Router();

BlogRouter.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).send(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

BlogRouter.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const blog = await BlogModel.findOne({ _id });
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

BlogRouter.post("/", async (req, res) => {
  try {
    const blogs = await BlogModel.create(req.body);
    res.status(200).send(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

BlogRouter.post("/image", MulterService.single("image"), async (req, res) => {
  try {
    const { path } = req.file;
    const image = await CloudinaryService.uploadImage(path);
    res.status(200).send({ image });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = BlogRouter;
