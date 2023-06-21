const guestNumInfo = localStorage.getItem('guestsNum'); 
const guestLocInfo = localStorage.getItem('guestsLocation');
const guestTimeInfo = localStorage.getItem('guestsDateTime');

const timeData = JSON.parse(guestTimeInfo); 
const formattedTime = `${timeData.time} ${timeData.date}`; 
console.log(formattedTime); 

function Data(number, location, time) {
    this.number = number;
    this.location = location;
    this.time = time;
}

const data = new Data(guestNumInfo, guestLocInfo, formattedTime);
if (guestNumInfo && guestLocInfo && formattedTime) {
  const container = document.getElementById("for-new-block");  
  const block = document.createElement('div');
  block.className = "container border border-secondary"
  block.id = "new-block"
  block.innerHTML = `<h3 class = "pt-3">Guests Reservation</h3><p>Guests number: ${data.number}</p>
  <p>Section: ${data.location}</p>
  <p>Data and time: ${data.time}</p>`;
  
  container.appendChild(block);
} else {
  console.log("There is no data");
}




