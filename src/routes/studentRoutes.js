const { request } = require("express");
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { School } = require("../models/schoolModel");
const { protect } = require("../middlewares/authMiddleware");

module.exports = router;
