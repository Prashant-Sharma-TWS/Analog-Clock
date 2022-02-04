let hourHand = document.getElementsByClassName("hour")[0];
let minuteHand = document.getElementsByClassName("minute")[0];
let secondHand = document.getElementsByClassName("second")[0];

function setClock() {
  const currDate = new Date();

  let seconds = currDate.getSeconds() / 60;
  let minutes = (seconds + currDate.getMinutes()) / 60;
  let hours = (minutes + currDate.getHours()) / 12;

  hourHand.style.setProperty("--rotation", hours * 360);
  minuteHand.style.setProperty("--rotation", minutes * 360);
  secondHand.style.setProperty("--rotation", seconds * 360);
}

setClock();

setInterval(setClock, 1000);
