// import module mongoose
const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: String,
  lieu: String,
  logo: String,
});

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
