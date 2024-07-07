const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.get("/", (req: any, res: any) => {
  res.send("Hello World This is Working...");
});

app.listen(3000, () => {
  console.log("Working...");
});
