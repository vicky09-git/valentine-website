const noBtn = document.getElementById("no");
const buttonsBox = document.querySelector(".buttons");

noBtn.style.position = "absolute";

noBtn.addEventListener("mouseenter", () => {
  const padding = 10;

  const maxX =
    buttonsBox.clientWidth - noBtn.offsetWidth - padding;
  const maxY =
    buttonsBox.clientHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
