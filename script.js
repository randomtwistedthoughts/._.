const TOTAL = 109;
let current = 0;
const img = document.getElementById("frame");
const counter = document.getElementById("counter");

// Preload all frames so clicking feels instant.
const images = Array.from({length: TOTAL}, (_, i) => {
  const image = new Image();
  image.src = `frames/frame_${String(i).padStart(4, "0")}.jpg`;
  return image;
});

function showFrame(index) {
  current = index;
  img.src = images[current].src;
  counter.textContent = `${current + 1} / ${TOTAL}`;
}

document.body.addEventListener("click", () => {
  if (current < TOTAL - 1) {
    showFrame(current + 1);
  } else {
    showFrame(0);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "ArrowRight") {
    event.preventDefault();
    showFrame((current + 1) % TOTAL);
  }
  if (event.code === "ArrowLeft") {
    event.preventDefault();
    showFrame((current - 1 + TOTAL) % TOTAL);
  }
});
