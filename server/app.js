// const dotenv = require("dotenv");

var createError = require("http-errors");
var cors=require('cors')
// dotenv.config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");

require("../server/Config/DBConnection").connectDB();
var app = express();
// view engine setup

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
