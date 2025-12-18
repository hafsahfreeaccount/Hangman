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

//word display and keyboard generation

document.addEventListener("DOMContentLoaded", () => {

    // WORD BANK
    const WORDS = ["javascript", "hangman", "developer", "keyboard", "browser"];
    let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    let guessedLetters = [];
    let wrongGuesses = 0;
    const maxWrong = 6;

    // DOM Elements
    const wordDisplay = document.querySelector(".word-display");
    const keyboardDiv = document.querySelector(".keyboard");
    const guessesText = document.querySelector(".guesses-text b");

    // GENERATE BLANKS
    function createBlanks() {
        wordDisplay.innerHTML = "";
        for (let i = 0; i < selectedWord.length; i++) {
            const li = document.createElement("li");
            li.classList.add("letter");
            li.textContent = "_";
            wordDisplay.appendChild(li);
        }
    }

    // GENERATE KEYBOARD
    function createKeyboard() {
        keyboardDiv.innerHTML = "";
        for (let i = 97; i <= 122; i++) {
            const button = document.createElement("button");
            button.innerText = String.fromCharCode(i);
            button.addEventListener("click", () => handleGuess(button));
            keyboardDiv.appendChild(button);
        }
    }

    // HANDLE GUESS
    function handleGuess(button) {
        const letter = button.innerText.toLowerCase();
        button.disabled = true;

        if (selectedWord.includes(letter)) {
            guessedLetters.push(letter);
            updateWordDisplay();
            checkWin();
        } else {
            wrongGuesses++;
            guessesText.textContent = wrongGuesses;
            checkLose();
        }
    }

    // UPDATE BLANKS
    function updateWordDisplay() {
        const letters = wordDisplay.querySelectorAll("li");
        for (let i = 0; i < selectedWord.length; i++) {
            letters[i].textContent = guessedLetters.includes(selectedWord[i]) ? selectedWord[i] : "_";
        }
    }

    // CHECK WIN
    function checkWin() {
        if (!wordDisplay.textContent.includes("_")) {
            alert("🎉 You Win!");
            disableKeyboard();
        }
    }

    // CHECK LOSE
    function checkLose() {
        if (wrongGuesses >= maxWrong) {
            alert(`💀 You Lost! Word was "${selectedWord}"`);
            disableKeyboard();
        }
    }

    function disableKeyboard() {
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }

    // INIT GAME
    createBlanks();
    createKeyboard();

});





