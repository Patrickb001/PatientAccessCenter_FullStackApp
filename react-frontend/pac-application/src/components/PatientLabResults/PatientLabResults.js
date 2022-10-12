import React from "react";
import { getDate } from "../../services/PatientService";

export const PatientLabResults = ({ patient }) => {
  const patientVisit = new Date();
  const [day, month, year] = getDate(patientVisit);

  return (
    <div className="col border border-2 mt-4">
      <div className="border-bottom py-2 ps-2 d-flex justify-content-between align-items-center">
        <span className="">Lab Results</span>
        <div className="d-inline-block">
          <span className="mt-1 me-1 cursor-on-hover">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </span>
        </div>
      </div>
      <ul className="list-group">
        {patient.labOrders.map((labOrder, idx) => (
          <li
            key={idx}
            className={`list-group-item border-start-0 border-end-0 rounded-0 border-top-0 cursor-on-hover ${
              idx === patient.labOrders.length - 1 ? "border-bottom-0" : ""
            } `}
          >
            <div className="d-flex justify-content-between">
              <div className="d-inline-block">
                <ion-icon name="document-outline"></ion-icon>
                <span className="ms-2">{labOrder}</span>
              </div>
              <span className="me-4 fw-light">{`${month}/${day}/${year}`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
