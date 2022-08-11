const { request } = require("express");
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { School } = require("../models/schoolModel");
const { protect } = require("../middlewares/authMiddleware");

// POST Create New Student
// PATH api/schools/:schoolId/students
// PRIVATE
router.post(
  "/:schoolId/students",
  protect,
  asyncHandler((req, res) => {
    const schoolId = req.params.schoolId;
    const data = req.body;

    if (schoolId !== req.schoolId) {
      res.status(401);
      throw new Error("Not authorized to access this page");
    }

    const school = School.findById(schoolId);

    if (!school) {
      res.status(400);
      throw new Error("Student not found");
    }

    res.status(200).json({ isSuccess: true, data: school });
  })
);
