const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 200 + "px";
});

document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = "<h1 style='color:#d62828'>YAYYY ❤️</h1>";
});
