const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

const bodyParse = require("body-parser");

app.use(bodyParse.json());

app.use(bodyParse.urlencoded());

app.use(express.static("public"));

const staticPath = path.join(__dirname, "../Public/index.html");
const sucessPath = path.join(__dirname, "../Public/successful.html");
const failPath = path.join(__dirname, "../Public/failed.html");

app.get("/", (req, res) => {
  res.sendFile(staticPath);
});

app.post("/form-status", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin@123") {
    res.sendFile(sucessPath);
  } else {
    res.sendFile(failPath);
  }
});

app.listen(port, () => {
  console.log(`Listening to Port ${8000}`);
});
