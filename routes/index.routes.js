const express = require("express");
const BlogRouter = require("./blog.routes");
const AuthRouter = require("./auth.routes");

const AppRouter = express.Router();

AppRouter.use("/blogs", BlogRouter);
AppRouter.use("/auth", AuthRouter);

module.exports = AppRouter;
