const Score = require("../models/Score");
const event = require("../public/Events.json");
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  server: "us2",
  apiKey: "4d524b90a7c882aeec4ffe2a95cda167-us2",
});

exports.home = (req, res) => {
  return res.render("home");
};

exports.about = (req, res) => {
  return res.render("about");
};

exports.workshop = (req, res) => {
  return res.render("workshop");
};

exports.game = (req, res) => {
  return res.render("game");
};

exports.other = (req, res) => {
  return res.render("soon");
};

exports.events = (req, res) => {
  return res.render("events", { events: event });
};

exports.leaderBoard = (req, res, next) => {
  Score.find({})
    .sort([["score", -1]])
    .exec((err, scores) => {
      if (err) return next(err);
      return res.render("leaderboard", { data: scores });
    });
};

exports.saveScore = (req, res, next) => {
  const newScore = req.body.score;
  const user = req.body.user;
  Score.findOne({ user: req.body.user }).exec((err, prevScore) => {
    if (err) return next(err);
    if (prevScore) {
      if (newScore > prevScore.score) {
        prevScore.score = newScore;
        prevScore.save();
      }
    } else {
      const score = new Score({ score: newScore, user: user });
      score.save();
    }
  });
  return res.json({ message: "success" });
};

exports.subscribe = (req, res) => {
  const listId = "a7f9f08b96";
  const subscribingUser = {
    email: req.body.email,
  };
  async function run() {
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
      });
      return res.status(200).json({ message: "Subscribe success!" });
    } catch (err) {
      return res.status(400).json({ message: "Subscribe failed!" });
    }
  }
  run();
};
