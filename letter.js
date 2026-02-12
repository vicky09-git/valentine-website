const yesBtn = document.getElementById("yes");
const buttonsDiv = document.querySelector(".buttons");
const container = document.querySelector(".content");
const effects = document.getElementById("effects");

let rainInterval;

/* ============================= */
/* YES CLICK EVENT */
/* ============================= */

yesBtn.addEventListener("click", () => {

  // Remove old elements
  buttonsDiv.remove();
  document.querySelector(".question").remove();
  document.querySelector(".character").remove();

  // Create final message
  const message = document.createElement("div");
  message.classList.add("final-message");

  message.innerHTML = `
    <h1>Yayyyy ❤️</h1>
    <h2>You are now official Valentine of</h2>
    <h3>Vivek Aggarwal 💕</h3>
    <p>
      I choose you today, I will choose you tomorrow.<br>
      And I will keep choosing you – always.
    </p>
    <h4>Happy Valentine's Day ❤️</h4>
  `;

  container.appendChild(message);

  // Trigger effects
  explodeHearts(25);
  explodeConfetti(60);
  startHeartRain();
});


/* ============================= */
/* HEART EXPLOSION */
/* ============================= */

function explodeHearts(count) {
  for (let i = 0; i < count; i++) {

    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("particle");

    // Start from center of screen
    heart.style.left = "50%";
    heart.style.top = "50%";

    heart.style.setProperty("--x", Math.random());
    heart.style.setProperty("--y", Math.random());

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}


/* ============================= */
/* CONFETTI EXPLOSION */
/* ============================= */

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


/* ============================= */
/* CONTINUOUS HEART RAIN */
/* ============================= */

function startHeartRain() {

  // Prevent multiple intervals
  if (rainInterval) return;

  rainInterval = setInterval(() => {

    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("rain-heart");

    heart.style.left = Math.random() * 100 + "vw";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);

  }, 300);
}
