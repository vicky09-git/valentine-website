const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");

const SAFE_DISTANCE = 60; // px gap from YES

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  let x, y;
  let dx, dy;

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

// Escape logic
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
