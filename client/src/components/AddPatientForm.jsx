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

  const [errors, setErrors] = useState([]);

  const validate = () => {
    const newErrors = [];

    if (!formData.name.trim()) newErrors.push("Name is required");
    if (!formData.age || isNaN(formData.age))
      newErrors.push("Age must be a valid number");
    if (formData.age < 0 || formData.age > 120)
      newErrors.push("Age must be between 0 and 120");
    if (!formData.diagnosis.trim()) newErrors.push("Diagnosis is required");
    if (!formData.medications.trim())
      newErrors.push("Medications are required");
    if (!formData.doctorName.trim()) newErrors.push("Doctor name is required");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch("http://localhost:3000/api/v1/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors(data.message || ["Server error"]);
      return;
    }

    setFormData({
      name: "",
      age: "",
      diagnosis: "",
      medications: "",
      doctorName: "",
    });

    setErrors([]);
    refreshPatients();
  };

  return (
    <div className="form-container">
      <h2>Add New Patient</h2>

      {errors.length > 0 && (
        <div className="error-box">
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
      )}

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
