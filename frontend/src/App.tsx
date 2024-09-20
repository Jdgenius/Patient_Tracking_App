import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //let patientData: Patient[] = [];

  const [patientData, setPatientData] = useState<Patient[]>([])
  

  useEffect(() => {
    loadPatients();
  },[])

  type Patient = {
    id: number,
    name: string,
    age: number,
    start_date?: string | undefined,
    patient_status: "awaiting" | "resolved" | "admitted",
    end_date?: string | undefined,
    reason: string,
  }

  const loadPatients = async () => {
    const url = "http://localhost:4000/patients"
    const options = {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      setPatientData((prevPatientData) => {
        const newPatients = data.filter((person: Patient) => 
          !prevPatientData.some(patient => patient.id === person.id)
        );
        return [...prevPatientData, ...newPatients];
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <ul>
        {patientData.map((person: Patient)=>(
          <li key={person.id}>
            {person.name}
            <br />
            {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
