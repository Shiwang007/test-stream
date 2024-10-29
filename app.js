const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const liveStreamRouter = require("./routes/live-stream.routes");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}

app.use(cors());

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes

app.use("/api/v1", liveStreamRouter);

module.exports = app;
