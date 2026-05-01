import { useState, useEffect } from "react";
import AddPatientForm from "./components/AddPatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);

  const refreshPatients = async () => {
    const res = await fetch("http://localhost:5000/patients");
    const data = await res.json();
    setPatients(data.data);
  };

  useEffect(() => {
    refreshPatients();
  }, []);

  return (
    <div>
      <AddPatientForm refreshPatients={refreshPatients} />
      <PatientsList patients={patients} refreshPatients={refreshPatients} />
    </div>
  );
}

export default App;
