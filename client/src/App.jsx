import { useState, useEffect } from "react";
import AddPatientForm from "./components/AddPatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);

  // GET all patients
  const refreshPatients = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/patients");
      const data = await res.json();
      setPatients(data.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  // Load patients on page load
  useEffect(() => {
    refreshPatients();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to the Patient Management System</h1>

      <AddPatientForm refreshPatients={refreshPatients} />
      <PatientsList patients={patients} refreshPatients={refreshPatients} />
    </div>
  );
}

export default App;
