// ❤️ Heart shower
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 12 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 180);

// Envelope click
const envelope = document.querySelector(".envelope");
if (envelope) {
  envelope.addEventListener("click", () => {
    window.location.href = "letter.html";
  });
}
