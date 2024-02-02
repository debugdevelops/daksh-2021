const e = require("express");
const express = require("express");
const indidersController = require("../controllers/insidersController");

const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated) {
    return next();
  }
  req.flash("error", "Login to continue");
  res.redirect("/insiders/login");
};
const skipLogin = (req, res, next) => {
  if (req.isAuthenticated) {
    return res.redirect("dashboard");
  }
  next();
};

router.get("/login", skipLogin, indidersController.login);
router.post("/login", skipLogin, indidersController.login);
router.get("/dashboard", ensureAuthenticated, indidersController.dashboard);
router.post("/dashboard", ensureAuthenticated, indidersController.dashboard);
router.get("/stats", ensureAuthenticated, indidersController.stats);
router.get(
  "/stats/delete/:id",
  ensureAuthenticated,
  indidersController.deleteURL
);

module.exports = router;
