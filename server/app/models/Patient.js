const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    medications: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Patient", PatientSchema);
