document.addEventListener("DOMContentLoaded", function () {

  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const container = document.querySelector(".content");
  const effects = document.getElementById("effects");
  const buttonsDiv = document.querySelector(".buttons");

  let yesScale = 1;
  let rainInterval = null;

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

    document.querySelector(".question")?.remove();
    document.querySelector(".character")?.remove();
    buttonsDiv?.remove();

    const message = document.createElement("h2");
    message.innerHTML = "Yayyyy ❤️<br>You are officially my Valentine 💕";
    message.style.color = "#d62828";
    message.style.marginTop = "40px";

    container.appendChild(message);

    createHearts(40);
    createConfetti(80);

    // Start continuous rain after explosion
    startHeartRain();
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

      effects.appendChild(heart);

      const x = Math.random() * 400 - 200;
      const y = Math.random() * 400 - 200;

      setTimeout(() => {
        heart.style.transform = `translate(${x}px, ${y}px)`;
        heart.style.opacity = "0";
      }, 10);

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

      effects.appendChild(confetti);

      const x = Math.random() * 500 - 250;
      const y = Math.random() * 500 - 250;

      setTimeout(() => {
        confetti.style.transform =
          `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`;
        confetti.style.opacity = "0";
      }, 10);

      setTimeout(() => confetti.remove(), 1000);
    }
  }

  /* ============================= */
  /* CONTINUOUS HEART RAIN */
  /* ============================= */

  function startHeartRain() {

    rainInterval = setInterval(() => {

      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("rain-heart");

      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-30px";

      effects.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);

    }, 200); // speed of rain (lower = heavier rain)
  }

});
