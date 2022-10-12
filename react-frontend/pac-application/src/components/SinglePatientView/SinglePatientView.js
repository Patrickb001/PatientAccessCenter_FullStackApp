import React from "react";
import { PatientNotes } from "../../PatientNotes/PatientNotes";
import { MedicationCard } from "../MedicationCard/MedicationCard";
import { PatientInfoCard } from "../PatientInfoCard/PatientInfoCard";
import { PatientLabResults } from "../PatientLabResults/PatientLabResults";
import { Vitals } from "../Vitals/Vitals";

export const SinglePatientView = ({ patient, setPatient }) => {
  console.log(patient);

  return (
    <div>
      <nav className="w-67 mx-auto mt-2 fs-4 d-flex justify-content-between">
        <span>Patient Overview</span>
        <div className="">
          <span
            onClick={() => setPatient(null)}
            className="me-2 fs-5 cursor-on-hover"
          >
            Home{" "}
          </span>
          <span className="me-3 fs-5 cursor-on-hover">Chart</span>
          <span className="me-3 fs-5 cursor-on-hover">Discharge</span>
        </div>
      </nav>
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
        <div className="row ms-5 d-flex justify-content-between mb-5">
          <PatientNotes />
          <PatientLabResults patient={patient} />
        </div>
      </div>
    </div>
  );
};
