const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("../routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose
  .connect("mongodb+srv://Abu:bmw550@cluster0.1ex3o.mongodb.net/blog-api", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("run..");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(3000, () => {
  console.log("Run");
});
