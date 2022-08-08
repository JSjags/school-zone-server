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
    students: [
      {
        name: {
          type: String,
          required: [true, "Please input name"],
        },
        age: {
          type: Number,
          required: [true, "Please input age"],
        },
        class: {
          type: String,
          required: [true, "Please input age"],
        },
        height: {
          type: String,
          required: [true, "Please input height"],
        },
        weight: {
          type: String,
          required: [true, "Please input height"],
        },
        avatar: {
          type: String,
          required: [true, "Please upload photo"],
        },
        feesStatus: {
          type: String,
        },
        nationality: {
          type: String,
          required: [true, "Please input nationality"],
        },
      },
    ],
    staffs: [
      {
        name: {
          type: String,
          required: [true, "Please input name"],
        },
        age: {
          type: Number,
          required: [true, "Please input age"],
        },
        typeOfStaff: {
          type: String,
          required: [true, "Please specify staff's role"],
        },
        office: {
          type: String,
          required: [true, "Please input staff,s office"],
        },
        height: {
          type: String,
          required: [true, "Please input height"],
        },
        weight: {
          type: String,
          required: [true, "Please input height"],
        },
        avatar: {
          type: String,
          required: [true, "Please upload photo"],
        },
        salary: {
          type: Number,
          required: [true, "Please input salary amount"],
        },
        nationality: {
          type: String,
          required: [true, "Please input nationality"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// schoolSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
// schoolSchema.pre("updateOne", async function (next) {
//   const docToUpdate = await this.model.findOne(this.getQuery());
//   console.log(docToUpdate);
//   next();
// });
// schoolSchema.post("updateOne", async function (result, next) {
//   console.log(result.getChanges);
//   next();
// });

const School = mongoose.model("School", schoolSchema);
module.exports = { School, schoolSchema };
