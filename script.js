function yesClick() {
  document.getElementById("response").innerHTML =
    "YAY!!! 💖🥹 You just made me the happiest person ever!";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
