var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.get("/", function (req, res) {
    res.send("Hello World This is Working...");
});
app.listen(3000, function () {
    console.log("Working...");
});
