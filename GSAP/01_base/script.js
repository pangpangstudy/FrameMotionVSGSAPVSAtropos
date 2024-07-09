gsap.to("#box", {
  x: 100,
  y: 100,
  duration: 2,
  delay: 1,
  //   repeat 属性指定动画应该重复的次数。
  //   如果设置为 -1，动画将无限次重复。
  repeat: -1,
  //   yoyo 属性决定动画在重复时是否应该反向播放。
  yoyo: true,
  rotate: 360,
  borderRadius: "50%",
});
// gsap.from("#box", {
//   x: 100,
//   y: 100,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "#fff",
//   borderRadius: "50%",
//   scale: 0.5,
//   rotate: 360,
// });
// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: -1,
// });
