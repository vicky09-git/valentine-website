document.addEventListener("DOMContentLoaded", function () {

  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const container = document.querySelector(".content");
  const effects = document.getElementById("effects");
  const buttonsDiv = document.querySelector(".buttons");

  let yesScale = 1;

  /* ============================= */
  /* NO BUTTON MOVEMENT */
  /* ============================= */

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

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  /* ============================= */
  /* YES CLICK EVENT */
  /* ============================= */

  yesBtn.addEventListener("click", function () {

    // Remove question, image, buttons
    document.querySelector(".question")?.remove();
    document.querySelector(".character")?.remove();
    buttonsDiv?.remove();

    // Show success message
    const message = document.createElement("h2");
    message.innerHTML = "Yayyyy ❤️<br>You are officially my Valentine 💕";
    message.style.color = "#d62828";
    message.style.marginTop = "40px";

    container.appendChild(message);

    // Explosion effects
    createHearts(40);
    createConfetti(80);
  });

  /* ============================= */
  /* HEART EXPLOSION */
  /* ============================= */

  function createHearts(count) {

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("particle");

      heart.style.left = centerX + "px";
      heart.style.top = centerY + "px";

      const x = Math.random() * 300 - 150;
      const y = Math.random() * 300 - 150;

      heart.style.transform = `translate(${x}px, ${y}px)`;

      effects.appendChild(heart);

      setTimeout(() => heart.remove(), 1000);
    }
  }

  /* ============================= */
  /* CONFETTI EXPLOSION */
  /* ============================= */

  function createConfetti(count) {

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      confetti.style.left = centerX + "px";
      confetti.style.top = centerY + "px";

      const x = Math.random() * 400 - 200;
      const y = Math.random() * 400 - 200;

      confetti.style.transform =
        `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`;

      effects.appendChild(confetti);

      setTimeout(() => confetti.remove(), 1000);
    }
  }

});
