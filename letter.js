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


// Create effects container if not present
let effects = document.getElementById("effects");
if (!effects) {
  effects = document.createElement("div");
  effects.id = "effects";
  document.body.appendChild(effects);
}

// ❤️ Heart rain
function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// 🎉 Confetti burst
function confettiBurst() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      ["#ff4d6d", "#ffafcc", "#ffc8dd", "#cdb4db"][
        Math.floor(Math.random() * 4)
      ];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// 💘 YES button action
yesBtn.addEventListener("click", () => {
  // Fade away game box
  gameWindow.style.transition = "opacity 1s ease, transform 1s ease";
  gameWindow.style.opacity = "0";
  gameWindow.style.transform = "scale(0.9)";

  // Show message
  setTimeout(() => {
    gameWindow.style.display = "none";

    const msg = document.createElement("h1");
    msg.innerHTML = "YAYYY ❤️<br>You made my day 💕";
    msg.style.color = "#d62828";
    msg.style.textAlign = "center";

    document.body.appendChild(msg);
  }, 1000);

  // Effects
  confettiBurst();
  startHeartRain();
});

