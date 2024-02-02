const URL = require("../models/URL");

exports.login = (req, res) => {
  if (req.method == "GET") {
    return res.render("insiders/login");
  }
  if (req.body.password == "Daksh@2k21") {
    res.cookie("insider-daksh", "authenticated", {
      maxAge: 999999,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    });
    return res.redirect("dashboard");
  }
  req.flash("error", "Wrong password");
  return res.redirect("login");
};

exports.dashboard = (req, res) => {
  if (req.method == "GET") {
    return res.render("insiders/dashboard");
  }
  const newURL = new URL({
    url: req.body.url,
    slug: req.body.slug.toLowerCase(),
  });
  newURL.save((err) => {
    if (err) {
      req.flash("error", "Slug already in use or Invalid slug");
    } else {
      req.flash("success", "daksh.tech/" + newURL.slug);
    }
    return res.redirect("dashboard");
  });
};

exports.stats = (req, res) => {
  URL.find().exec((err, data) => {
    if (err) return next(err);
    return res.render("insiders/stats", { data });
  });
};

exports.deleteURL = (req, res) => {
  URL.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) return next(err);
    return res.redirect("/insiders/stats");
  });
};

exports.redirect = (req, res, next) => {
  URL.findOne({ slug: req.params.id.toLowerCase() }).exec((err, url) => {
    if (err || !url) {
      return res.redirect("/");
    }
    url.visited++;
    url.save(() => {
      return res.redirect(url.url);
    });
  });
};
