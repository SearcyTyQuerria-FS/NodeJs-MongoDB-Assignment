const express = require("express");
const app = express();
const patientRoutes = require("./routes/patientRoutes.js");
const prescriptionRoutes = require("./routes/prescriptionRoutes.js");

app.use(express.json());

app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/prescriptions", prescriptionRoutes);

module.exports = app;
