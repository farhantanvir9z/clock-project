const seconds = 1000;
const minutes = seconds * 60;
const hour = minutes * 60;
const displayHour = document.getElementById("displayHour");
  const displayMinute = document.getElementById("displayMinutes");
  const displaySecond = document.getElementById("displaySeconds");
 const dialogBox = document.getElementById("dialogBox");
 const timerSound = document.getElementById("audio");
 let inputHour = 0, inputMinute = 0, inputSecond = 0, totalTimeInMs, intervalId;
function toogleMenu() {
  const header = document.getElementById("header");
  header.style.height = (header.style.height === "60px") ? "210px" : "60px" ;
};
let isFirstOne = true;
function toggleImage() {
  const timerButton = document.getElementById("play-pause");
  if (isFirstOne) {
    timerButton.src = "../images/pause_button.png";
  
  } else {
    timerButton.src = "../images/play_button.png";
  }
  isFirstOne = !isFirstOne; 
  toggleCountDown();
};
function showDialogBox() {
  dialogBox.show();
};
function closeDialogBox() {
  dialogBox.close();
};
function displayTime() {
  
  inputHour = parseInt(document.getElementById("inputHour").value) || 0;
  inputMinute = parseInt(document.getElementById("inputMinutes").value) || 0;
 inputSecond = parseInt(document.getElementById("inputSeconds").value) || 0;
   
  totalTimeInMs = (inputHour * hour ) + (inputMinute * minutes) + (inputSecond * seconds);
  updateDisplay();
  dialogBox.close();
};
// it is generated by ai idea. this function
function updateDisplay() {
  let remainingTime = totalTimeInMs;
  displayHour.value = String(Math.floor(remainingTime / hour)).padStart(2, '0');
  displayMinute.value = String(Math.floor((remainingTime % hour) / minutes)).padStart(2, '0');
  displaySecond.value = String(Math.floor((remainingTime % minutes) / seconds)).padStart(2, '0');
}

function countDownStart() {
 if (totalTimeInMs <= 0) {
   clearInterval(intervalId);
   timerSound.play();
   isCountDownRunning = false;
   return;
 } else {
   totalTimeInMs -= seconds;
   updateDisplay();
 }
}
function countDownStop() {
 clearInterval(intervalId);
}
let isCountDownRunning = false;
function toggleCountDown() {
  if (!isCountDownRunning) {
  intervalId = setInterval(countDownStart,1000);
  } else {
    clearInterval(intervalId);
  }
  isCountDownRunning = !isCountDownRunning; 
}
function init() {
  console.log("Javascript initialized");
  toogleMenu();
  
};
init();