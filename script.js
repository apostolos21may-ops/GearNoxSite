const texts = document.querySelectorAll('.text');

let index = 0;

function showNext() {
  texts.forEach(t => t.classList.remove('active'));
  if (index < texts.length) {
    texts[index].classList.add('active');
    index++;
  }
}

setInterval(showNext, 1800);
showNext();