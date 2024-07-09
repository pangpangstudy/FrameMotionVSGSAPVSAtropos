window.addEventListener("wheel", (e) => {
  console.log(e.deltaY);
  if (e.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  }
});
