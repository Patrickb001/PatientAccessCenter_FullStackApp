import React from "react";

export const Vitals = ({ patient }) => {
  return (
    <div>
      <div className="border-bottom py-1 ps-2 d-flex justify-content-between align-items-center">
        <span className="">Vitals</span>
        <span className="mt-1 cursor-on-hover">
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </span>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <div className="icon my-2">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div>Blood Pressure</div>
          <div className="mb-3 fw-bold">{`${patient.vitalSigns[0]}`}</div>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <div className="icon my-2">
            <ion-icon name="pulse-outline"></ion-icon>
          </div>
          <div>Pulse</div>
          <div className="mb-3 fw-bold">
            {`${patient.vitalSigns[1]}`} <span className="fw-light">BPM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
