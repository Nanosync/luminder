const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    recipients: [String],
    messages: [{
      from: String,
      to: String,
      message: String,
    }]
  },
  {
    timestamps: true,
  }
);

const Chats = mongoose.model("Chats", chatSchema);

module.exports = Chats;
