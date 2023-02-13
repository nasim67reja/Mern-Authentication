const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json()); // parses the request body

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/v1/users", userRouter);

// Invalid route
app.all("*", (req, res) => {
  res.status(404).send({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
