const noBtn = document.getElementById("no");
const container = document.querySelector(".buttons");

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

// Runs BEFORE a click can happen
noBtn.addEventListener("mouseenter", moveNoButton);

// Keeps escaping if user tries to chase it
noBtn.addEventListener("mousemove", moveNoButton);

// Even if clicked, it escapes 😈
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

