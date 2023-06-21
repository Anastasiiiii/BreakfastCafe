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

    //loginModal.show();
});

window.onload = function() {
    //Choose guests-number
    document.getElementById('btn-for-reservation').addEventListener("click", function(event) {
    event.preventDefault();
  
    const guestsNumber = document.querySelector('.guestsnum:checked').value;
    localStorage.setItem('guestsNum', guestsNumber);
  
    // Choose guest-location
    const terraceOption = document.getElementById("terrace-location");
    const indoorOption = document.getElementById("indoor-location");

    let terraceOptionValue;
    terraceOption.onclick = function setTerraceOption() {
        terraceOptionValue = "terrace location";
        localStorage.setItem('guestsLocation', terraceOptionValue);
    }

    let indoorOptionValue
    indoorOption.onclick = function setIndoorOption() {
        indoorOptionValue = "indoor location";
        localStorage.setItem('guestsLocation', indoorOptionValue);
    }

    // Choose date and time
    const timeValue = document.getElementById("time").value;
    const dateValue = document.getElementById("data").value;
    const dateTime = {
      time: timeValue,
      date: dateValue
    };

    localStorage.setItem('guestsDateTime', JSON.stringify(dateTime));
  });
}
