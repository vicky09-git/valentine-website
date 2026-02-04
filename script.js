// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

// Envelope click
document.querySelector(".envelope").addEventListener("click", () => {
  window.location.href = "letter.html";
});
