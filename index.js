const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppRouter = require("./routes/index.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", AppRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
