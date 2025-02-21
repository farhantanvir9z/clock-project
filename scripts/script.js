let date;
function toogleMenu() {
  const header = document.getElementById("header");
  header.style.height = (header.style.height === "60px") ? "210px" : "60px"
}
const seconds = 1000
const minute = seconds * 60;
const hour = minute * 60;
function displayTime() {
  const date = new Date();
  const displayHour = document.querySelector("#hour");
  const displayMinute = document.querySelector("#minute");
  const displaySecond = document.querySelector("#second");
  const am = document.querySelector('#am');
  const pm = document.querySelector('#pm');
  pm.style.backgroundColor = "";
  pm.style.color = "";
  am.style.backgroundColor = "";
  am.style.color = ""
  let hours;
if (date.getHours() > 12) {
  hours = date.getHours() - 12;
  pm.style.backgroundColor = "mediumseagreen";
  pm.style.color = "#fff"; 
} else {
  hours = date.getHours();
  am.style.backgroundColor = "mediumseagreen";
  am.style.color = "#fff";
}

 displayHour.value = hours.toString().padStart(2,"0");
 displayMinute.value = date.getMinutes().toString().padStart(2,"0");
 displaySecond.value = date.getSeconds().toString().padStart(2,"0");
}
function displayDate() {
  date = new Date();
  const displayDate = document.querySelector('#displayDate');
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  displayDate.innerHTML = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}
function init() {
  console.log("Javascript initialized.")
  toogleMenu();
  displayTime();
  setInterval(displayTime,1000)
  displayDate()
  setInterval(displayDate,1000)
};
init()