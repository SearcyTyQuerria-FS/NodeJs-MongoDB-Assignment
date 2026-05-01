import { useState } from "react";
import "./AddPatientForm.css";

function AddPatientForm({ refreshPatients }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    diagnosis: "",
    medications: "",
    doctorName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      name: "",
      age: "",
      diagnosis: "",
      medications: "",
      doctorName: "",
    });

    refreshPatients(); // auto-refresh list
  };

  return (
    <div className="form-container">
      <h2>Add New Patient</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Diagnosis:</label>
          <input
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Medications (comma separated):</label>
          <input
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Doctor Name:</label>
          <input
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatientForm;
