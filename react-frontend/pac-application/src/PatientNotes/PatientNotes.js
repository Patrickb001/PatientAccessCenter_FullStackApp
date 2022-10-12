import React from "react";

export const PatientNotes = () => {
  return (
    <div className="col border border-2 me-4 mt-4">
      <div className="border-bottom py-2 ps-2 d-flex justify-content-between align-items-center">
        <span className="">Notes</span>
        <div className="d-inline-block">
          <span className="mt-1 me-3 cursor-on-hover">
            <ion-icon name="cog-outline"></ion-icon>
          </span>
          <span className="mt-1 me-1 cursor-on-hover">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </span>
        </div>
      </div>
      <div>
        <div className="fw-light mt-3 ps-2">10/12/2022</div>
        <div className="fs-6 ps-2 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          dignissimos nihil similique nostrum, iste distinctio expedita
          explicabo quaerat possimus numquam facere ad. Maiores atque veritatis
          quia quidem eius nam fugit. <br />
          <br />
          In sit, porro, reprehenderit quas, nam esse ratione quod quis
          doloremque fugit eius saepe? Odit blanditiis consectetur maiores
          labore expedita accusantium cumque. Facilis modi magnam a temporibus
          quisquam sapiente voluptatem?
        </div>
      </div>
    </div>
  );
};
