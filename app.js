var express = require("express");
var path = require("path");
var logger = require("morgan");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("home/index", { title: new Date() }));

app.listen(3000, () => console.log("Ntalk no ar."));
