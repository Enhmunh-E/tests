const express = require("express");
const app = express();
let arr = [];
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
  res.send({ message: arr });
});
let a = 1;
app.post("/post", (req, res) => {
  arr.push(a);
  a++;
  res.send({ message: arr });
});
app.delete("/delete", (req, res) => {
  let newArray = arr.filter((_, ind) => ind !== req.body.index);
  res.send({
    message: "success",
    before: arr,
    after: newArray,
  });
  arr = newArray;
});
app.listen(4002, () => {
  console.log("server listening");
});
