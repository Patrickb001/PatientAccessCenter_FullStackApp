import React from "react";
import { getDate } from "../../services/PatientService";

export const PatientInfoCard = ({ patient }) => {
  const [day, month, year] = getDate(patient.dob);

  return (
    <div className="col-sm-7 pt-3 ps-5 border border-2">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="d-flex flex-column align-items-center mb-3">
              <img className="profile-img mb-2" src={`${patient.profileImg}`} />
              <h2 className="fs-5 mb-1">{patient.name}</h2>
              <p className="fs-6">
                <span className="fw-light">Dx: </span>
                {patient.diagnosis}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap ps-3">
              <div className="me-5 mb-4">
                <h2 className="fs-6">DOB</h2>
                <h2 className="fs-6">{`${month}/${day}/${year}`}</h2>
              </div>
              <div className="mb-4">
                <h2 className="fs-6">Age</h2>
                <h2 className="fs-6">{2022 - year}</h2>
              </div>
              <div className="me-5">
                <h2 className="fs-6 me-4">Weight</h2>
                <h2 className="fs-6">{patient.weight}</h2>
              </div>
              <div>
                <h2 className="fs-6">Height</h2>
                <h2 className="fs-6">{patient.height}</h2>
              </div>
              <div className="my-3">
                <div>
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-start ms-3">
          <div className="mb-3">
            <div className="fs-6 ">Home Address</div>
            <div className="fs-6 fw-light">{patient.address}</div>
          </div>
          <div className="mb-3">
            <div className="fs-6">Mobile Phone</div>
            <div className="fs-5 fw-light">{patient.mobileNumber}</div>
          </div>
          <div className="mb-3">
            <div className="fs-6">Home Phone</div>
            <div className="fs-5 fw-light">{patient.homeNumber}</div>
          </div>
          <div className="mb-3">
            <div className="fs-6">Work Phone</div>
            <div className="fs-5 fw-light">{patient.workNumber}</div>
          </div>
          <div className="">
            <div className="fs-6">Email</div>
            <div className="fs-5 fw-light">{patient.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
