import React from "react";
import {
  MedicationCard,
  PatientInfoCard,
  PatientLabResults,
  Vitals,
  ChartModal,
  DischargeModal,
} from "../index";
import { PatientNotes } from "../../PatientNotes/PatientNotes";
import "../CustomModal/CustomModal.css";
import ModalService from "../CustomModal/service/CustomModalService";

export const SinglePatientView = ({ patient, setPatient }) => {
  return (
    <div>
      <nav className="w-67 mx-auto mt-2 fs-4 d-flex justify-content-between">
        <span>Patient Overview</span>
        <div className="d-inline-block">
          <span
            onClick={() => setPatient(null)}
            className="me-2 fs-5 cursor-on-hover"
          >
            Home{" "}
          </span>
          <span
            onClick={() => ModalService.openChartModal()}
            id="open"
            className="me-3 fs-5 cursor-on-hover"
          >
            Chart
          </span>
          <span
            onClick={() => ModalService.openDischargeModal()}
            className="me-3 fs-5 cursor-on-hover"
          >
            Discharge
          </span>
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
      <ChartModal setPatient={setPatient} patient={patient} />
      <DischargeModal setPatient={setPatient} patient={patient} />
    </div>
  );
};
