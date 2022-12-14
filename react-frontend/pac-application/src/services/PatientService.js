import axios from "axios";

const PATIENT_REST_API_URL = "http://localhost:8080/api/v1/patients";

export async function getAllPatients() {
  return await axios.get(PATIENT_REST_API_URL);
}

export async function getPatientById(id) {
  return await axios.get(`${PATIENT_REST_API_URL}?id=${id}`);
}

export function getDate(dateString) {
  let date = new Date(dateString);
  let day = date.getDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();

  return [day, month, year];
}

export async function updatePatient(patientData) {
  return await axios.put(`${PATIENT_REST_API_URL}`, patientData);
}

export async function removePatient(patientData, id) {
  return await axios.delete(`${PATIENT_REST_API_URL}?id=${id}`, {
    data: patientData,
  });
}
