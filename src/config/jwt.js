const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
<<<<<<< HEAD
    expiresIn: "30d",
=======
    expiresIn: "1d",
>>>>>>> e78d3a831c48de5c48a7a05bf101a4caa904a6c3
  });
};

module.exports = createToken;
