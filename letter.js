const noBtn = document.getElementById("no");
let yesScale = 1;

/* ============================= */
/* NO BUTTON MOVEMENT (Desktop + Mobile) */
/* ============================= */

noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("pointerdown", moveNoButton);

function moveNoButton() {

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Make YES grow
  yesScale += 0.08;
  yesBtn.style.transform = `scale(${yesScale})`;
}




const yesBtn = document.getElementById("yes");
const buttonsDiv = document.querySelector(".buttons");
const container = document.querySelector(".content");
const effects = document.getElementById("effects");

let rainInterval;

/* YES CLICK */
yesBtn.addEventListener("click", () => {

  buttonsDiv.remove();
  document.querySelector(".question").remove();
  document.querySelector(".character").remove();

  const message = document.createElement("h2");
  message.innerHTML = "Yayyyy ❤️<br>You are officially the Valentine of Vivek Aggarwal💕";
  message.style.color = "#d62828";
  message.style.marginTop = "40px";

  container.appendChild(message);

  explodeHearts(25);
  explodeConfetti(60);
  startHeartRain();
});

/* HEART EXPLOSION */
function explodeHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("particle");

    heart.style.left = "50%";
    heart.style.top = "50%";

    heart.style.setProperty("--x", Math.random());
    heart.style.setProperty("--y", Math.random());

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

/* CONFETTI EXPLOSION */
function explodeConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background =
      `hsl(${Math.random() * 360}, 80%, 60%)`;

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

/* CONTINUOUS HEART RAIN */
function startHeartRain() {
  rainInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("rain-heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
