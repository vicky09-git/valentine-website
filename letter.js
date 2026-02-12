const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".content");

let yesScale = 1;

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton); // extra safety for mobile

function moveNoButton() {
  // Get container boundaries
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate max allowed positions
  const maxX = container.clientWidth - btnRect.width;
  const maxY = container.clientHeight - btnRect.height;

  // Generate random position
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply movement
  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Optional: make YES button slightly bigger every time 😈
  yesScale += 0.05;
  yesBtn.style.transform = `scale(${yesScale})`;
}
