const express = require("express");

const AuthRouter = express.Router();

AuthRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (
      email?.toLowerCase() === adminEmail &&
      password?.toLowerCase() === adminPassword
    ) {
      res.status(200).send({ success: true });
    } else {
      res.status(403).send({ message: "You are not an admin" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = AuthRouter;
