import express from "express";
const app = express();

app.get("/", () => {
  alert("Working...");
});

app.listen(3000, () => {
  console.log("Working...");
});
