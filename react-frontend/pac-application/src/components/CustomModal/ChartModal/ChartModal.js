import React, { useState, useEffect } from "react";
import "../CustomModal.css";
import ModalService from "../service/CustomModalService";
import { updatePatient } from "../../../services/PatientService";

const patientForm = {
  profileImg: "",
  name: "",
  weight: "",
  height: "",
  gender: "",
  diagnosis: "",
  address: "",
  email: "",
  homeNumber: "",
  mobileNumber: "",
  workNumber: "",
  comorbidities: [""],
  medications: [""],
  vitalSigns: [""],
  labOrders: [""],
  dob: "",
};

export const ChartModal = ({ patient, setPatient }) => {
  const [updatePatientForm, setUpdatePatientForm] = useState(patientForm);
  useEffect(() => {
    setUpdatePatientForm(patient);
  }, []);

  const handlePatientFormSubmit = async (e) => {
    e.preventDefault();

    const updatedPatientResponse = await updatePatient(updatePatientForm).then(
      (res) => {
        setPatient(patient);
        return res.data;
      }
    );

    setPatient(updatedPatientResponse);

    ModalService.closeChartModal();
  };

  return (
    <div className="body">
      <div id="custom_modal-container" className="custom-modal-container">
        <div className="custom-modal">
          <h2>Patient Info</h2>
          <form onSubmit={handlePatientFormSubmit}>
            <div className="mb-3">
              <div className="text-start">
                <label htmlFor="patientAddress" className="form-label">
                  Address
                </label>
              </div>
              <input
                onChange={(e) =>
                  setUpdatePatientForm({
                    ...updatePatientForm,
                    address: e.target.value,
                  })
                }
                value={updatePatientForm.address}
                type="text"
                className="form-control"
                id="patientAddress"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <div className="text-start">
                <label htmlFor="patientEmail" className="form-label">
                  Email
                </label>
              </div>
              <input
                onChange={(e) =>
                  setUpdatePatientForm({
                    ...updatePatientForm,
                    email: e.target.value,
                  })
                }
                value={updatePatientForm.email}
                type="email"
                className="form-control"
                id="patientEmail"
              />
            </div>
            <div className="mb-3">
              <div className="text-start">
                <label htmlFor="patientDOB" className="form-label">
                  DOB: yyyy/mm/dd
                </label>
              </div>
              <input
                onChange={(e) =>
                  setUpdatePatientForm({
                    ...updatePatientForm,
                    dob: e.target.value,
                  })
                }
                value={updatePatientForm.dob}
                type="text"
                className="form-control"
                id="patientDOB"
              />
            </div>
            <div className="mb-3">
              <div className="text-start">
                <label htmlFor="patientVitals" className="form-label">
                  Vital Signs (Leave comma in between vitals)
                </label>
              </div>
              <input
                onChange={(e) =>
                  setUpdatePatientForm({
                    ...updatePatientForm,
                    vitalSigns: e.target.value.split(","),
                  })
                }
                value={updatePatientForm.vitalSigns}
                type="text"
                className="form-control"
                id="patientVitals"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                ModalService.closeChartModal();
              }}
              id="close-custom-modal"
              className="cm-btn me-3"
            >
              Cancel
            </button>
            <button type="submit" className="cm-btn">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
