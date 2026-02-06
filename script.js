const words = [
  "Price lies.",
  "Liquidity doesn't.",
  "Smart money watches flow.",
  "Not charts.",
  "Narratives."
];

const el = document.getElementById("word");
let i = 0;

function showWord() {
  el.classList.remove("show");

  setTimeout(() => {
    el.textContent = words[i];
    el.classList.add("show");
    i = (i + 1) % words.length;
  }, 400);
}

showWord();
setInterval(showWord, 2200);