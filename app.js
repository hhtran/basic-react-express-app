var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

var usersRoutes = require("./routes/users");
var dogsRoutes = require("./routes/dogs");

mongoose.connect("mongodb://localhost/basic-react-express-database");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client/build")));

/* Register routes */
app.use("/api/users", usersRoutes);
app.use("/api", dogsRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
