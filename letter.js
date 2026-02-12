document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const buttonsDiv = document.querySelector(".buttons");
  const container = document.querySelector(".content");
  const effects = document.getElementById("effects");

  let yesScale = 1;
  let rainInterval;

  /* ============================= */
  /* NO BUTTON MOVEMENT (Mobile + Desktop) */
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

    // YES grows
    yesScale += 0.08;
    yesBtn.style.transform = `scale(${yesScale})`;
  }

  /* ============================= */
  /* YES CLICK */
  /* ============================= */

  yesBtn.addEventListener("click", () => {

    buttonsDiv.remove();
    document.querySelector(".question").remove();
    document.querySelector(".character").remove();

    const message = document.createElement("h2");
    message.innerHTML = "Yayyyy ❤️<br>You are officially the Valentine of Vivek Aggarwal 💕";
    message.style.color = "#d62828";
    message.style.marginTop = "40px";

    container.appendChild(message);

    explodeHearts(80);
    explodeConfetti(150);
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

      heart.style.left = "50%";
      heart.style.top = "50%";

      heart.style.setProperty("--x", Math.random());
      heart.style.setProperty("--y", Math.random());

      effects.appendChild(heart);

      setTimeout(() => heart.remove(), 1000);
    }
  }

  /* ============================= */
  /* CONFETTI */
  /* ============================= */

function explodeConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Start at center
    confetti.style.left = "50%";
    confetti.style.top = "50%";

    // Random direction
    confetti.style.setProperty("--x", Math.random());
    confetti.style.setProperty("--y", Math.random());

    // Random color
    confetti.style.background =
      `hsl(${Math.random() * 360}, 80%, 60%)`;

    effects.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1000);
  }
}


  /* ============================= */
  /* CONTINUOUS HEART RAIN */
  /* ============================= */



  function startHeartRain() {

  if (rainInterval) return;

  rainInterval = setInterval(() => {

    // Create multiple hearts at once
    for (let i = 0; i < 10; i++) {

      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("rain-heart");

      // Random horizontal position
      heart.style.left = Math.random() * 100 + "vw";

      // Random size (more natural look)
      heart.style.fontSize = (16 + Math.random() * 18) + "px";

      effects.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }

  }, 80); // Faster spawn rate
}


});
