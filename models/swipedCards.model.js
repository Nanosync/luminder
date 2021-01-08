const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    uid: String,
    targetUid: String,
    action: String
  },
  {
    timestamps: true
  }
);

const SwipedCards = mongoose.model("SwipedCards", cardSchema);

module.exports = SwipedCards;
