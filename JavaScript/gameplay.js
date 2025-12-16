const instructionsBtn = document.getElementById("instructionsBtn");

if (instructionsBtn) {
    instructionsBtn.addEventListener("click", () => {
        window.location.href = "instructions.html";
    });
}


const pauseBtn = document.getElementById("pauseBtn");
const pauseOverlay = document.getElementById("pauseOverlay");

const closePauseBtn = document.getElementById("closePauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");

const homeBtn = document.getElementById("homeBtn");
const pauseInstructionsBtn = document.getElementById("pauseInstructionsBtn");

/* Open pause */
pauseBtn.addEventListener("click", () => {
    pauseOverlay.style.display = "flex";
});

/* Close / Resume */
closePauseBtn.addEventListener("click", () => {
    pauseOverlay.style.display = "none";
});

resumeBtn.addEventListener("click", () => {
    pauseOverlay.style.display = "none";
});

/* Restart */
restartBtn.addEventListener("click", () => {
    location.reload();
});

/* Go Home */
homeBtn.addEventListener("click", () => {
    window.location.href = "homescreen.html";
});

/* Instructions */
pauseInstructionsBtn.addEventListener("click", () => {
    window.location.href = "instructions.html";
});
