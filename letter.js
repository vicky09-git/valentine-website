const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");
const gameWindow = document.querySelector(".game-window");

const SAFE_DISTANCE = 120;

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  let x, y, dx, dy;

  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;

    dx = Math.abs(x - yesBtn.offsetLeft);
    dy = Math.abs(y - yesBtn.offsetTop);
  } while (dx < SAFE_DISTANCE && dy < SAFE_DISTANCE);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Escape BEFORE click
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);

// 🔒 Hard block click
noBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  moveNoButton();
});



