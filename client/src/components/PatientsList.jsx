import { useEffect } from "react";
import "./PatientsList.css";

function PatientsList({ patients, refreshPatients }) {
  const deletePatient = async (id) => {
    await fetch(`http://localhost:5000/patients/${id}`, {
      method: "DELETE",
    });
    refreshPatients();
  };

  useEffect(() => {
    refreshPatients();
  }, []);

  return (
    <div className="patients-container">
      <h2>All Patients</h2>

      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        patients.map((p) => (
          <div key={p._id} className="patient-card">
            <h3>{p.name}</h3>
            <p>
              <strong>Doctor:</strong> {p.doctorName}
            </p>
            <p>
              <strong>Age:</strong> {p.age}
            </p>
            <p>
              <strong>Diagnosis:</strong> {p.diagnosis}
            </p>
            <p>
              <strong>Medications:</strong> {p.medications}
            </p>
            <p>
              <strong>Admitted:</strong>{" "}
              {new Date(p.createdAt).toLocaleString()}
            </p>

            {/* action buttons */}
            <div className="card-actions">
              <button
                className="delete-btn"
                onClick={() => deletePatient(p._id)}
              >
                Delete
              </button>

              <button className="edit-btn">Edit Prescription</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PatientsList;
