const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    blog: {
      type: String,
      required: [true, "blog is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
