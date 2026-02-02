const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.onmouseover = function() {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 200 - 100 + "px";
  noBtn.style.top = Math.random() * 200 - 100 + "px";
};

yesBtn.onclick = function() {
  document.body.innerHTML = `
    <h1>🥳 You said YES! 💖</h1>
    <p>Happy Valentine's Day!</p>
  `;
};
