const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 1,
    },
    uid: {
      type: String,
    },
    gender: {
      type: String,
    },
    bio: {
      type: String,
    },
    modules: [String],
    chats: [String],
    matches: [String],
    likes: [
      {
        uid: String,
        time: Date,
      },
    ],
    dislikes: [
      {
        uid: String,
        time: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
