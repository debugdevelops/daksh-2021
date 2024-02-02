const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const flash = require("connect-flash");

const utsav = require("./routes/utsav");
const insiders = require("./routes/insiders");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("open", () => console.log("Database connection successful"));
db.on("error", console.log.bind(console, "MongoDB Connection Error: "));

app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(
  session({
    secret: "Daksh@2k21",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});

app.use((req, res, next) => {
  req.cookies["insider-daksh"] === "authenticated"
    ? (req.isAuthenticated = true)
    : (req.isAuthenticated = false);
  next();
});

app.use("/", utsav);
app.use("/insiders", insiders);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started at http://localhost:" + PORT);
});
