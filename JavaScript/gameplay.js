// Opens overlays
const instructionsBtn = document.getElementById("instructionsBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Overlays
const instructionsOverlay = document.getElementById("instructionsOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
const exitOverlay = document.getElementById("exitOverlay");

// Instructions overlay close
const closeInstructionsBtn = document.getElementById("closeInstructions");

// Pause overlay buttons
const closePauseBtn = document.getElementById("closePause");
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");
const pauseInstructionsBtn = document.getElementById("pauseInstructionsBtn");
const homeBtn = document.getElementById("homeBtn");

// Exit overlay buttons
const closeExitBtn = document.getElementById("closeExit");
const exitYesBtn = document.getElementById("exit-yes");
const exitNoBtn = document.getElementById("exit-no");

let instructionsFromPause = false;

/* helper functions */
function showOverlay(overlay) {
  if (overlay) overlay.style.display = "flex";
}

function hideOverlay(overlay) {
  if (overlay) overlay.style.display = "none";
}

function closeExitOverlay() {
  hideOverlay(exitOverlay);
}

/* pause logic */
if (pauseBtn && pauseOverlay) {
  pauseBtn.addEventListener("click", () => showOverlay(pauseOverlay));
}

if (closePauseBtn && pauseOverlay) {
  closePauseBtn.addEventListener("click", () => hideOverlay(pauseOverlay));
}

if (resumeBtn && pauseOverlay) {
  resumeBtn.addEventListener("click", () => hideOverlay(pauseOverlay));
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
    location.reload();
  });
}

/* instructions */
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
    if (instructionsFromPause) showOverlay(pauseOverlay);
  });
}

/* exit */
if (homeBtn && exitOverlay) {
  homeBtn.addEventListener("click", () => {
    hideOverlay(pauseOverlay);
    showOverlay(exitOverlay);
  });
}

if (exitNoBtn) exitNoBtn.addEventListener("click", closeExitOverlay);
if (closeExitBtn) closeExitBtn.addEventListener("click", closeExitOverlay);

if (exitYesBtn) {
  exitYesBtn.addEventListener("click", () => {
    window.location.href = "homescreen.html";
  });
}