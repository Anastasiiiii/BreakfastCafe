document.addEventListener("DOMContentLoaded", function() {
const reserveTableButton = document.getElementById("reserveTableButton");
const closeModalButton = document.getElementById("closeModalButton");
const cancelReserveButton = document.getElementById("cancelReserveButton");

const reserveModal = new bootstrap.Modal(document.getElementById("reserveModal"));
    reserveTableButton.addEventListener("click", function() {
        reserveModal.show();
    });

    closeModalButton.addEventListener("click", function() {
        reserveModal.hide();
    });

    cancelReserveButton.addEventListener("click", function() {
        reserveModal.hide();
    });

    loginModal.show();
});