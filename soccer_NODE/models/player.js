// import module mongoose
const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: String,
  post: String,
  age: Number,
  team_id: { type: String, ref: "Team" },
});

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
