import React from "react";
import { MedicationCard } from "../MedicationCard/MedicationCard";
import { PatientInfoCard } from "../PatientInfoCard/PatientInfoCard";
import { Vitals } from "../Vitals/Vitals";

export const SinglePatientView = ({ patient }) => {
  console.log(patient);

  return (
    <div>
      <nav className="w-67 mx-auto my-1">Patient Overview</nav>
      <div className="container mx-auto w-75 mt-4">
        <div className="row ms-5 ">
          <PatientInfoCard patient={patient} />
          <div className=" ms-3 col d-flex flex-column">
            <div className="row border border-2  justify-self-start">
              <MedicationCard patient={patient} />
            </div>
            <div className="row border border-2 mt-3 justify-self-center">
              <Vitals patient={patient} />
            </div>
          </div>
        </div>
        <div className="row ms-5">
          <div className="col">
            <div>{patient.gender}</div>
          </div>
          <div className="col">
            <div>{patient.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
