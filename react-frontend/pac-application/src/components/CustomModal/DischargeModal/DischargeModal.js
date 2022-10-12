import React, { useState, useEffect } from "react";
import "./DischargeModal.css";
import ModalService from "../service/CustomModalService";
import { removePatient } from "../../../services/PatientService";

export const DischargeModal = ({ patient, setPatient }) => {
  const dischargePatient = async () => {
    console.log(patient);
    await removePatient(patient, patient.id);
    window.location.reload();
    setPatient(null);
  };

  return (
    <div className="discharge-body">
      <div id="discharge_modal-container" className="discharge-modal-container">
        <div className="discharge-modal">
          <div className="fs-5">
            Are You Sure You Would Like To Discharge The Patient?{" "}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button
            onClick={(e) => {
              e.preventDefault();
              ModalService.closeDischargeModal();
            }}
            id="close-custom-modal"
            className="btn-primary me-3"
          >
            Cancel
          </button>
          <button onClick={dischargePatient} className="discharge cm-btn">
            Discharge
          </button>
        </div>
      </div>
    </div>
  );
};
