const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("");
});

app.get("/Admin", (req, res) => {
  res.send("Admin Page");
});

app.listen(3000, () => {
  console.log("Working...");
});
