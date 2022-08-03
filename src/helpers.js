const School = require("./models/schoolModel");
const { isEmail, isMobilePhone, isStrongPassword } = require("validator");

// input checkers
const checkSchoolName = (val) => {
  if (val.length < 5) {
    return "Name of school cannot be less than 5 characters";
  }
};

const checkInstitutionLevel = (val) => {
  if (val === "Select your institution") {
    return "Please select your institution";
  }
};

const checkAddress = (val) => {
  if (val.length < 10) {
    return "Address cannot be less than 10 characters";
  }
};

const checkIsEmail = (val) => {
  if (!isEmail(val)) {
    return "Please input valid E-mail";
  }
};

const checkPhoneNumber = (val) => {
  if (!isMobilePhone(val)) {
    return "Please enter valid phone number";
  }
};

const checkPassword = (val, confirmPassword) => {
  const errArr = [];
  if (val.length < 8) {
    return errArr.push(["Password cannot be less than 8 characters"]);
  }
  if (!isStrongPassword(val)) {
    return errArr.push([
      "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol.",
    ]);
  }
  if (val !== confirmPassword) {
    return errArr.push(["This field does not match confirm password field"]);
  }
  if (val.length > 8 && isStrongPassword(val) && val === confirmPassword) {
    delete errArr;
  }
  return errArr;
};

const checkConfirmPassword = (val, password) => {
  if (val !== password) {
    return "Passwords do not match";
  }
};

// check if email exists in database
const checkEmail = async (email, res) => {
  const result = await School.findOne({ email });
  if (result) {
    res.status(400);

    throw new Error("Email already used");
  }
};

// check inputs in request body
const checkInputs = (object) => {
  const errors = {};

  for (const path in object) {
    if (Object.hasOwnProperty.call(object, path)) {
      const element = object[path];
      if (path === "schoolName") {
        const res = checkSchoolName(object[path]);
        if (res) {
          errors.schoolName = res;
        }
      }
      if (path === "institutionLevel") {
        const res = checkInstitutionLevel(object[path]);
        if (res) {
          errors.institutionLevel = res;
        }
      }
      if (path === "address") {
        const res = checkAddress(object[path]);
        if (res) {
          errors.address = res;
        }
      }
      if (path === "email") {
        const res = checkIsEmail(object[path]);
        if (res) {
          errors.address = res;
        }
      }
      if (path === "phoneNumber") {
        const res = checkPhoneNumber(object[path]);
        if (res) {
          errors.address = res;
        }
      }
      if (path === "password") {
        const res = checkPassword(object[path], object["confirmPassword"]);
        if (res) {
          errors.address = res;
        }
      }
      if (path === "confirmPassword") {
        const res = checkConfirmPassword(object[path], object["password"]);
        if (res) {
          errors.address = res;
        }
      }
    } else {
      res.status(400);
      throw new Error("Please fill in all fields");
    }
    if (!Object.getOwnPropertyNames(object).length === 0) {
      res.status(400);
      throw new Error(json.stringify(errors));
    }
  }
};

const helpers = {
  checkEmail,
  checkInputs,
};

module.exports = helpers;
