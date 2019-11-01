const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  title: { type: Number, required: true },
  
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
