// stores difficulty lebels in local storage
document.addEventListener("DOMContentLoaded", () => {
  const difficulty = localStorage.getItem("difficulty");

  // Force difficulty selection
  if (!difficulty) {
    window.location.href = "difficulty.html";
    return;
  }})




// Opens overlays
const instructionsBtn = document.getElementById("instructionsBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Overlays
const instructionsOverlay = document.getElementById("instructionsOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
const exitOverlay = document.getElementById("exitOverlay");

// Instruction controls
const closeInstructionsBtn = document.getElementById("closeInstructions");

// Pause controls
const closePauseBtn = document.getElementById("closePauseBtn"); 
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");
const pauseInstructionsBtn = document.getElementById("pauseInstructionsBtn");
const homeBtn = document.getElementById("homeBtn");

// Exit controls
const closeExitBtn = document.getElementById("closeExit");
const exitYesBtn = document.getElementById("exit-yes");
const exitNoBtn = document.getElementById("exit-no");

// Track where instructions opened from
let instructionsFromPause = false;

/* ===============================
   HELPER FUNCTIONS
================================ */

function showOverlay(overlay) {
  if (overlay) overlay.style.display = "flex";
}

function hideOverlay(overlay) {
  if (overlay) overlay.style.display = "none";
}

function closeExitOverlay() {
  hideOverlay(exitOverlay);
}

/* ===============================
   PAUSE OVERLAY LOGIC
================================ */

if (pauseBtn && pauseOverlay) {
  pauseBtn.addEventListener("click", () => {
    showOverlay(pauseOverlay);
  });
}

if (closePauseBtn && pauseOverlay) {
  closePauseBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
  });
}

if (resumeBtn && pauseOverlay) {
  resumeBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
    location.reload();
  });
}

/* ===============================
   INSTRUCTIONS OVERLAY LOGIC
================================ */

if (instructionsBtn && instructionsOverlay) {
  instructionsBtn.addEventListener("click", () => {
    instructionsFromPause = false;
    showOverlay(instructionsOverlay);
  });
}

if (pauseInstructionsBtn && instructionsOverlay) {
  pauseInstructionsBtn.addEventListener("click", () => {
    instructionsFromPause = true;
    hideOverlay(pauseOverlay);
    showOverlay(instructionsOverlay);
  });
}

if (closeInstructionsBtn && instructionsOverlay) {
  closeInstructionsBtn.addEventListener("click", () => {
    hideOverlay(instructionsOverlay);
    if (instructionsFromPause) {
      showOverlay(pauseOverlay);
    }
  });
}

/* ===============================
   EXIT OVERLAY LOGIC
================================ */

if (homeBtn && exitOverlay) {
  homeBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
    showOverlay(exitOverlay);
  });
}

if (exitNoBtn) {
  exitNoBtn.addEventListener("click", closeExitOverlay);
}

if (closeExitBtn) {
  closeExitBtn.addEventListener("click", closeExitOverlay);
}

if (exitYesBtn) {
  exitYesBtn.addEventListener("click", () => {
    window.location.href = "homescreen.html";
  });
}

//interactive keyboard and adding event listeners

const keyboardDiv = document.querySelector(".keyboard");

const getRandomWord = () => {
  //selecting a random word and hint from the word lsit
  const {word, hint} = wordList[Math,floor(Math.random() * wordList.length)];
  console.log(word,hint);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);