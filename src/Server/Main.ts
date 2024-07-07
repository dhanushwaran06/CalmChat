const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(3000, () => {
  console.log("Working...");
});
