import { useEffect, useState } from "react";
import "./PatientsList.css";

function PatientsList({ patients, refreshPatients }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    diagnosis: "",
    medications: "",
  });

  const deletePatient = async (id) => {
    await fetch(`http://localhost:3000/api/v1/patients/${id}`, {
      method: "DELETE",
    });
    refreshPatients();
  };

  const editPatient = async (id) => {
    await fetch(`http://localhost:3000/api/v1/patients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });

    setEditingId(null);
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

            <div className="card-actions">
              <button
                className="delete-btn"
                onClick={() => deletePatient(p._id)}
              >
                Delete
              </button>

              <button
                className="edit-btn"
                onClick={() => {
                  setEditingId(p._id);
                  setEditForm({
                    diagnosis: p.diagnosis,
                    medications: p.medications,
                  });
                }}
              >
                Edit Prescription
              </button>
            </div>

            {editingId === p._id && (
              <div className="edit-form">
                <input
                  name="diagnosis"
                  value={editForm.diagnosis}
                  onChange={(e) =>
                    setEditForm({ ...editForm, diagnosis: e.target.value })
                  }
                  placeholder="Diagnosis"
                />

                <input
                  name="medications"
                  value={editForm.medications}
                  onChange={(e) =>
                    setEditForm({ ...editForm, medications: e.target.value })
                  }
                  placeholder="Medications"
                />

                <button onClick={() => editPatient(p._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default PatientsList;