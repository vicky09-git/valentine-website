document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("no");
  const content = document.querySelector(".content");

  // Ensure proper positioning context
  content.style.position = "relative";
  noBtn.style.position = "absolute";

  function moveButton() {
    const maxX = content.clientWidth - noBtn.offsetWidth;
    const maxY = content.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }

  // Move when mouse comes near (desktop)
  noBtn.addEventListener("mouseenter", moveButton);

  // Extra protection (if somehow clicked)
  noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    moveButton();
  });

  // Mobile support
  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveButton();
  });

  // Initial random position
  moveButton();
});
