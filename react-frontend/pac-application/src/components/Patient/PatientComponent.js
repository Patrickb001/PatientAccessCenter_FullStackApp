import React, { useEffect, useState } from "react";
import { getAllPatients, getPatientById } from "../../services/PatientService";
import { AllPatients, SinglePatientView } from "../index";

export const PatientComponent = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    handleAllPatientData();
  }, []);

  async function handleAllPatientData() {
    const patients = await getAllPatients();
    setPatients(patients.data);
  }

  async function getSinglePatient(id) {
    await getPatientById(id).then((res) => {
      const foundPatient = res.data[0];
      setPatient(foundPatient);
    });
  }

  return (
    <div>
      {!patient ? (
        <AllPatients patients={patients} getSinglePatient={getSinglePatient} />
      ) : (
        <SinglePatientView setPatient={setPatient} patient={patient} />
      )}
    </div>
  );
};
