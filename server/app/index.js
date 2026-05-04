const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const patientRoutes = require("./routes/patientRoutes.js");
const prescriptionRoutes = require("./routes/prescriptionRoutes.js");

app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/prescriptions", prescriptionRoutes);

module.exports = app;
