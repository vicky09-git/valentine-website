// =====================
// NO button runaway 😈
// =====================
const noBtn = document.getElementById("no");
const buttonsBox = document.querySelector(".buttons");

// force absolute inside buttons
noBtn.style.position = "absolute";
noBtn.style.left = "10px";
noBtn.style.top = "10px";

noBtn.addEventListener("mouseenter", () => {
  const padding = 5;

  const maxX =
    buttonsBox.clientWidth - noBtn.offsetWidth - padding;
  const maxY =
    buttonsBox.clientHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


// =====================
// YES button magic 💖
// =====================
const yesBtn = document.getElementById("yes");
const effects = document.getElementById("effects");
const gameWindow = document.querySelector(".game-window");

let fired = false;

yesBtn.addEventListener("click", () => {
  if (fired) return;
  fired = true;

  // fade out LOVE window
  gameWindow.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  gameWindow.style.opacity = "0";
  gameWindow.style.transform = "scale(0.9)";

  setTimeout(() => {
    gameWindow.style.display = "none";
  }, 400);

  showYayMessage();
  rainHearts();
  popConfetti();
});


// =====================
// YAY overlay ❤️
// =====================
function showYayMessage() {
  const msg = document.createElement("div");
  msg.textContent = "YAYYY ❤️";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.fontSize = "42px";
  msg.style.fontWeight = "bold";
  msg.style.color = "#d62828";
  msg.style.zIndex = "100000";

  document.body.appendChild(msg);
}


// =====================
// Heart rain 💖
// =====================
function rainHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 18 + "px";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 150);

  setTimeout(() => clearInterval(interval), 4500);
}


// =====================
// Confetti 🎉
// =====================
function popConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration =
      2 + Math.random() * 2 + "s";

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
