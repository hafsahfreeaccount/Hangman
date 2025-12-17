let currentPlayer = localStotage.getItem("currentPlayer");

if (currentPlayer) {
    currentPLayer =  "1";
    locaStorage.setItem("currentPlayer", "1");

const nextBtn = document.getElementById ("nextBtn");
const scoreDisplay = document.getElementById ("scoreValue");
    
 if (currentPlayer == "1") {
scoreDisplay.textContent = localStorage.getItem ("player1Score"); 
    } else {
        scoreDisplay.textContent = localStorage.getItem("player2Score");
    }

    
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
    
}


