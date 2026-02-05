const noBtn = document.getElementById("no");
const container = document.querySelector(".content");

noBtn.addEventListener("mouseover", () => {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = "<h1 style='color:#d62828'>YAYYY ❤️</h1>";
});
