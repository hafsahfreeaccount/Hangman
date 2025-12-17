document.addEventListener("DOMContentLoaded", () => {
  const easyBtn = document.getElementById("easyB");
  const hardBtn = document.getElementById("hardB");

  function startGame(difficulty) {
    localStorage.setItem("difficulty", difficulty);
    window.location.href = "gameplay.html";
  }

  easyB.addEventListener("click", () => startGame("easy"));
  hardB.addEventListener("click", () => startGame("hard"));
});
