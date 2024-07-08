const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Idea", IdeaSchema);
