const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".content");
const effects = document.getElementById("effects");
const buttonsDiv = document.querySelector(".buttons");

let yesScale = 1;

/* ============================= */
/* NO BUTTON MOVEMENT */
/* ============================= */

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  yesScale += 0.05;
  yesBtn.style.transform = `scale(${yesScale})`;
}

/* ============================= */
/* YES CLICK EVENT */
/* ============================= */

yesBtn.addEventListener("click", () => {

  // Remove buttons
  buttonsDiv.remove();

  // Remove question + cat image
  document.querySelector(".question").remove();
  document.querySelector(".character").remove();

  // Show success message
  const message = document.createElement("h2");
  message.innerHTML = "Yayyyy ❤️<br>You are officially my Valentine 💕";
  message.style.color = "#d62828";
  message.style.marginTop = "40px";

  container.appendChild(message);

  // Trigger effects
  createHearts(30);
  createConfetti(80);
});

/* ============================= */
/* HEART EXPLOSION */
/* ============================= */

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("particle");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* ============================= */
/* CONFETTI EXPLOSION */
/* ============================= */

function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
