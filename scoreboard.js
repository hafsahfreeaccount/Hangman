console.log("Scoreboard JS loaded");

document.addEventListener("DOMContentLoaded", () => {
	const p1Output = document.getElementById("p1Score");
	const p2Output = document.getElementById("p2Score");
	const newGameBtn = document.getElementById("newGameBtn");

	const p1Score = localStorage.getItem("p1Score") || 0;
	const p2Score = localStorage.getItem("p2Score") || 0;

	if (p1Output) p1Output.textContent = p1Score;
	if (p2Output) p2Output.textContent = p2Score;

	if (newGameBtn) {
		newGameBtn.addEventListener("click", () => {
			localStorage.removeItem("p1Score");
			localStorage.removeItem("p2Score");
			window.location.href = "homescreen.html";
		});
	}
});
