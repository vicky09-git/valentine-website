document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const content = document.querySelector(".content");

  function moveButton() {
    const contentRect = content.getBoundingClientRect();

    const maxX = content.clientWidth - noBtn.offsetWidth;
    const maxY = content.clientHeight - noBtn.offsetHeight;

    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }

  // Move when mouse enters button
  noBtn.addEventListener("mouseenter", moveButton);

  // Prevent click
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
  });

  // Mobile support
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
  });
});
