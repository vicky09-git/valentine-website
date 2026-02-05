// =====================
// NO button runaway 😈
// =====================
const noBtn = document.getElementById("no");
const container = document.querySelector(".content");

noBtn.addEventListener("mouseover", () => {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});


// =====================
// YES button magic 💖
// =====================
const yesBtn = document.getElementById("yes");
const effects = document.getElementById("effects");
const loveWindow = document.querySelector(".game-window");

yesBtn.addEventListener("click", () => {
  // hide love window
  loveWindow.style.transition = "opacity 0.4s, transform 0.4s";
  loveWindow.style.opacity = "0";
  loveWindow.style.transform = "scale(0.9)";

  setTimeout(() => {
    loveWindow.style.display = "none";
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
  msg.innerText = "YAYYY ❤️";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.fontSize = "44px";
  msg.style.color = "#d62828";
  msg.style.fontWeight = "bold";
  msg.style.zIndex = "100000";
  msg.style.textShadow = "0 0 12px #ff4d6d";

  document.body.appendChild(msg);
}


// =====================
// Heart rain 💖
// =====================
function rainHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 24 + "px";
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

    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
