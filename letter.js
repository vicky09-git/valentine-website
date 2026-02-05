const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");

function isOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  noBtn.style.position = "absolute";

  let attempts = 0;
  let x, y, noRect;

  do {
    x = Math.random() * (containerRect.width - noBtn.offsetWidth);
    y = Math.random() * (containerRect.height - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noRect = noBtn.getBoundingClientRect();
    attempts++;

  } while (isOverlapping(noRect, yesRect) && attempts < 50);
}

// Escape BEFORE click
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);

// Even if clicked, escape
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
