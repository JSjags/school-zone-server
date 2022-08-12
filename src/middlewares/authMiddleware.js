const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { School } = require("../models/schoolModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.schoolId = decoded.id;
      next();
    } catch (error) {
      res.status(401);
      if (error.name === "TokenExpiredError") {
        throw new Error(`Token has expired: ${error}`);
      }
      throw new Error(`User not authorized: ${error}`);
    }
  }

  if (!token) {
    res.status(401);

    throw new Error(`Please login to proceed`);
  }
});

module.exports = { protect };
