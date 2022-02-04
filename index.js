let hourHand = document.getElementsByClassName("hour")[0];
let minuteHand = document.getElementsByClassName("minute")[0];
let secondHand = document.getElementsByClassName("second")[0];

function setClock() {
  const currDate = new Date();

  let seconds = currDate.getSeconds() / 60;
  let minutes = (seconds + currDate.getMinutes()) / 60;
  let hours = (minutes + currDate.getHours()) / 12;

  hourHand.style.transform = "rotate(" + hours * 360 + "deg)";
  minuteHand.style.transform = "rotate(" + minutes * 360 + "deg)";
  secondHand.style.transform = "rotate(" + seconds * 360 + "deg)";
}

setClock();

setInterval(setClock, 1000);
