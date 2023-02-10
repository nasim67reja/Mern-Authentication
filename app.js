const express = require("express");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json()); // parses the request body

app.use("/api/v1/users", userRouter);

// Invalid route
app.all("*", (req, res) => {
  res.status(404).send({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
