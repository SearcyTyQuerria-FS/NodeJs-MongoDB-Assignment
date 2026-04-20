const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  medicationName: { type: String, required: true },
  dosageInMg: { type: Number, min: 1 },
  requiresRefrigeration: { type: Boolean, default: false },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
});

module.exports = mongoose.model("Prescription", prescriptionSchema);
