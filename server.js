const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
