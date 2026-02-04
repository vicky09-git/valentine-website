// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 12 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Heart shower
setInterval(createHeart, 200);


// Envelope click
document.querySelector(".envelope").addEventListener("click", () => {
  window.location.href = "letter.html";
});

