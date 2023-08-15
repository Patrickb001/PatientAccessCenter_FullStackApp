function openChartModal(e) {
  console.log(e);
  const modalContainer = document?.querySelector("#custom_modal-container");
  modalContainer?.classList?.add("show");
}
function openDischargeModal(e) {
  console.log(e);
  const modalContainer = document?.querySelector("#discharge_modal-container");
  modalContainer?.classList?.add("show");
}

function closeChartModal(e) {
  const modalContainer = document?.querySelector("#custom_modal-container");
  modalContainer?.classList?.remove("show");
}
function closeDischargeModal(e) {
  const modalContainer = document?.querySelector("#discharge_modal-container");
  modalContainer?.classList?.remove("show");
}

const ModalService = {
  openChartModal,
  closeChartModal,
  openDischargeModal,
  closeDischargeModal,
};

export default ModalService;
