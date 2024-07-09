var h1 = document.querySelector("h1");
let newText = "";
var h1Text = h1.textContent.split("").forEach((item, i) => {
  if (i < 5) {
    newText = newText + `<span class="a">${item}</span>`;
  } else {
    newText = newText + `<span class="b">${item}</span>`;
  }
});
h1.innerHTML = newText;
// const tl = gsap.timeline();
// tl.to("span", {});
gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  // delay: 0.1,
  stagger: 0.1,
});
gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  // delay: 0.2,
  stagger: -0.1,
});
