const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [6, "Password is cannot be less than 8 characters"],
      maxlength: [100, "password cannot be more than 100 characters"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      validate: [isEmail, "Please enter a valid e-mail."],
    },
    institutionLevel: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password is cannot be less than 8 characters"],
      maxlength: [30, "password cannot be more than 30 characters"],
    },
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    backdrop_image: {
      type: String,
      default: "",
    },
    avatar_image: {
      type: String,
      default: "",
    },
    currency: {
      type: String,
      required: [true, "Please select standard currency"],
    },
    students: [],
    staffs: [],
  },
  {
    timestamps: true,
  }
);

schoolSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const School = mongoose.model("School", schoolSchema);
module.exports = { School, schoolSchema };
