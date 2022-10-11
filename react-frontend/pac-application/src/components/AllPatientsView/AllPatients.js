import React from "react";

export const AllPatients = ({ patients, getSinglePatient }) => {
  return (
    <div>
      <h1 className="text-center">Patient List</h1>
      <table className="mx-auto table table-striped">
        <thead>
          <tr>
            <td>Patient Name</td>
            <td> Weight</td>
            <td> Gender</td>
            <td> Diagnosis</td>
            <td> Comorbidities</td>
          </tr>
        </thead>
        <tbody className="cursor-on-hover">
          {patients.map((patient) => (
            <tr onClick={() => getSinglePatient(patient.id)} key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.weight}</td>
              <td>{patient.gender}</td>
              <td>{patient.diagnosis}</td>
              {patient.comorbidities ? (
                <td>{patient.comorbidities.join(", ")}</td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
