const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Tite cannot be empty"],
    },
    message: {
      type: String,
      required: [true, "Message cannot be empty"],
    },
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please input sender's id"],
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please input recipient's id"],
    },
    viewed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = { Message, messageSchema };
