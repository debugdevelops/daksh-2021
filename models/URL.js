const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  slug: {
    type: String,
    maxlength: 100,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /[\w\-]/i.test(v);
      },
      message: (props) => "Invalid Slug",
    },
  },
  url: { type: String, required: true },
  visited: { type: Number, default: 0 },
});

module.exports = mongoose.model("URL", URLSchema);
