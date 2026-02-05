const noBtn = document.getElementById("no");
const container = document.querySelector(".content");

noBtn.addEventListener("mouseover", () => {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

const yesBtn = document.getElementById("yes");
const effects = document.getElementById("effects");

yesBtn.addEventListener("click", () => {
  showYayMessage();
  rainHearts();
  popConfetti();
});

/* ❤️ YAY MESSAGE (overlay, not DOM destroy) */
function showYayMessage() {
  const msg = document.createElement("div");
  msg.innerText = "YAYYY ❤️";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.fontSize = "40px";
  msg.style.color = "#d62828";
  msg.style.fontWeight = "bold";
  msg.style.zIndex = "10000";

  document.body.appendChild(msg);
}

/* 💖 HEART RAIN */
function rainHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);

  setTimeout(() => clearInterval(interval), 4000);
}

/* 🎉 CONFETTI */
function popConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
