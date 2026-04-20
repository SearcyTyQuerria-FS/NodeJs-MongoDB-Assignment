const Prescription = require("../models/Prescriptions.js");

exports.getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find().populate("patient_id");
    res.status(200).json({ success: true, data: prescriptions });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id).populate(
      "patient_id",
    );
    if (!prescription) {
      return res
        .status(404)
        .json({ success: false, message: "Prescription not found" });
    }
    res.status(200).json({ success: true, data: prescription });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.createPrescription = async (req, res) => {
  try {
    const newPrescription = await Prescription.create(req.body);
    res.status(201).json({ success: true, data: newPrescription });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updatePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!prescription) {
      return res
        .status(404)
        .json({ success: false, message: "Prescription not found" });
    }
    res.status(200).json({ success: true, data: prescription });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deletePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndDelete(req.params.id);
    if (!prescription) {
      return res
        .status(404)
        .json({ success: false, message: "Prescription not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
