const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
