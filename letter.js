const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const gameBox = document.querySelector(".game-window");
const dog = document.querySelector(".character");

const SAFE_GAP = 20;

function moveNoButton() {
  const boxRect = gameBox.getBoundingClientRect();
  const dogRect = dog.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  // Allowed vertical area:
  // BELOW dog + gap
  // ABOVE yes - button height - gap
  const minY = dog.offsetTop + dog.offsetHeight + SAFE_GAP;
  const maxY = yesBtn.offsetTop - noBtn.offsetHeight - SAFE_GAP;

  const maxX = gameBox.clientWidth - noBtn.offsetWidth;

  let x, y;

  do {
    x = Math.random() * maxX;
    y = minY + Math.random() * (maxY - minY);
  } while (
    Math.abs(x - yesBtn.offsetLeft) < yesBtn.offsetWidth + SAFE_GAP
  );

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// escape logic
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);

// hard block click
noBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  moveNoButton();
});
