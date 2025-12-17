let currentPlayer = localStotage.getItem("currentPlayer");

const nextBtn = document.getElementById("nextBtn");
const nextBtn = document.getElementById("nextBtn");

// Save current player during gameplay
let currentPlayer = localStorage.getItem("currentPlayer");

if (!currentPlayer) {
    currentPLayer =  "1";
    locaStorage.setItem("currentPlayer", "!");

    
if  (nextBtn) {
    nextBtn.addEventListener("click", ()  => {
        if currentPlayer === "1") {

        localStorage.setItem("currentPlayer, "2");
            window.location.href = "gameplay.html";
        } else {

        window.location.href = "scoreboard.html";
        }
    });
}
    
const scoreDisplay = document.getElementById ("scoreValue");
const currentPlayer = localStorage.getItem("currentPlayer");

    if (currentPlayer == "1") {
scoreDisplay.textContent = localStorage.getItem ("player1Score"); 
    } else {
        scoreDisplay.textContent = localStoragge.getItem("player2Score");
    }


