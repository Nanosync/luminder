const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    uid: String,
    name: String,
    photos: [String],
    gender: String,
    age: Number,
    modules: [String],
    bio: String
  },
  {
    timestamps: true
  }
);

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;
