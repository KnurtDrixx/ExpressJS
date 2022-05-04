const express = require("express");
let app = express();
const fs = require("fs");
const path = require("path");

const postPath = path.join(__dirname, "post.json");

app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/hello", (req, res, next) => {
  res.send("Hello World!");
});

app.get("/formsubmissions", (req, res, next) => {
  res.send(fs.readFileSync(postPath).toString);
});

app.post("/pizza", (req, res) => {
  const data = req.body;
  const oldData = JSON.parse(fs.readFileSync(postPath).toString());
  const newData = [data, ...oldData];
  fs.writeFileSync(postPath, JSON.stringify(newData));
  res.json({ message: "here is your form", data });
});

app.listen(3000);
