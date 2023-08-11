const express = require("express");
const app = express();
const port = 3000;

app.all("/", (req, res, next) => {
  console.log("Request logged!");
  next();
});

app.get("/users", (req, res, next) => {
  res.send("Hello Users! " + req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello World! " + req.method);
  next();
});

app.post("/", (req, res, next) => {
  res.send("Hello World! " + req.method);
  next();
});

app.all("/", (req, res) => {
  console.log("Response has been sent!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
