import React, { useEffect, useState } from "react";
import { getAllPatients, getPatientById } from "../../services/PatientService";
import { AllPatients } from "../AllPatientsView/AllPatients";
import { SinglePatientView } from "../SinglePatientView/SinglePatientView";

export const PatientComponent = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(
    () => async () => {
      await getAllPatients().then((res) => {
        setPatients(res.data);
      });
    },
    []
  );

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
        <SinglePatientView patient={patient} />
      )}
    </div>
  );
};
