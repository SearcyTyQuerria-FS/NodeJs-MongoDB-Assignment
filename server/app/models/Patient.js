const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  roomNumber: { type: Number },
  isDischarged: { type: Boolean, default: false },
});

module.exports = mongoose.model("Patient", patientSchema);
