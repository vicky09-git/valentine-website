const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");

// minimum gap from YES button (adjust if needed)
const SAFE_GAP = 50;

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  let x, y;
  let overlap;

  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;

    // future NO button box
    const noLeft = x;
    const noRight = x + noBtn.offsetWidth;
    const noTop = y;
    const noBottom = y + noBtn.offsetHeight;

    // YES button box
    const yesLeft = yesBtn.offsetLeft - SAFE_GAP;
    const yesRight = yesBtn.offsetLeft + yesBtn.offsetWidth + SAFE_GAP;
    const yesTop = yesBtn.offsetTop - SAFE_GAP;
    const yesBottom = yesBtn.offsetTop + yesBtn.offsetHeight + SAFE_GAP;

    // check overlap
    overlap = !(
      noRight < yesLeft ||
      noLeft > yesRight ||
      noBottom < yesTop ||
      noTop > yesBottom
    );

  } while (overlap);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// escape logic
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);

// block click completely
noBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  moveNoButton();
});



