import React from "react";

export const MedicationCard = ({ patient }) => {
  return (
    <div>
      <div className="border-bottom py-2 ps-2 d-flex justify-content-between align-items-center">
        <span className="">Current Medications</span>
        <div className="d-inline-block">
          <span className="mt-1 me-3 cursor-on-hover">
            <ion-icon name="cog-outline"></ion-icon>
          </span>
          <span className="mt-1 me-1 cursor-on-hover">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </span>
        </div>
      </div>
      <ul className="list-group">
        {patient.medications.map((medication, idx) => (
          <li
            key={idx}
            className={`list-group-item border-start-0 border-end-0 rounded-0 border-top-0 ${
              idx === 3 ? "border-bottom-0" : ""
            } `}
          >
            <ion-icon name="medkit-outline"></ion-icon>
            <span className="ms-2">{medication}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
