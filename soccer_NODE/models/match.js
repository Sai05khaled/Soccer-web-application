// import module mongoose
const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  teamOne: String,
  teamTwo: String,
  scoreOne: Number,
  scoreTwo: Number,
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;
