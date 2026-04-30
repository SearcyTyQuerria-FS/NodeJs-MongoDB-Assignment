import { useState } from "react";
import "./AddPatientForm.css";

function AddPatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    diagnosis: "",
    medications: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

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
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
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

        <button className="submit-btn" type="submit">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatientForm;
