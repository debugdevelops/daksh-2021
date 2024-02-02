const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  user: { type: String, maxlength: 100, required: true, trim: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model("Score", ScoreSchema);
