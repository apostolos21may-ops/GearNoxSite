(() => {
  const fill = document.getElementById("headerLineFill");
  const links = document.querySelectorAll(".hlink");
  const header = document.querySelector(".header");

  if (!fill || !links.length || !header) return;

  function moveFillTo(el){
    const r = el.getBoundingClientRect();
    const hr = header.getBoundingClientRect();
    const left = r.left - hr.left;
    fill.style.left = `${left}px`;
    fill.style.width = `${r.width}px`;
  }

  function hideFill(){
    fill.style.width = "0px";
  }

  links.forEach(a => {
    a.addEventListener("mouseenter", () => moveFillTo(a));
    a.addEventListener("focus", () => moveFillTo(a));
  });

  header.addEventListener("mouseleave", hideFill);
  links[links.length - 1].addEventListener("blur", hideFill);
})();