const instructionsBtn = document.getElementById("instructionsBtn");

if (instructionsBtn) {
    instructionsBtn.addEventListener("click", () => {
        window.location.href = "instructions.html";
    });
}