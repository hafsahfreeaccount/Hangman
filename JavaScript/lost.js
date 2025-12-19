const instructionsBtn = document.getElementById("instructionsBtn");
const nextBtnContainer = document.querySelector(".lose-popup");

if (instructionsBtn) {
    instructionsBtn.addEventListener("click", () => {
        window.location.href = "instructions.html";
    });
}

// Get player and difficulty from URL
const params = new URLSearchParams(window.location.search);
const player = params.get("player");
const difficulty = params.get("difficulty");

// Create the button dynamically
const nextBtn = document.createElement("button");
nextBtn.id = "nextBtn";
nextBtn.style.padding = "10px 20px";
nextBtn.style.marginTop = "20px";
nextBtn.style.fontSize = "1rem";

if (player === "1") {
    nextBtn.textContent = "Player 2's Turn";
    nextBtn.addEventListener("click", () => {
        localStorage.setItem("currentPlayer", "2");
        window.location.href = `gameplay.html?difficulty=${difficulty}`;
    });
} else {
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () => {
        localStorage.removeItem("currentPlayer"); // reset
        window.location.href = "scoreboard.html";
    });
}

// Append the button to popup
nextBtnContainer.appendChild(nextBtn);
