// gsap.from("#page1 #box", {
//   duration: 2,
//   // backgroundColor: "#fff",
//   rotate: 360,
//   repeat: -1,
// });
gsap.to("#page1 #box", {
  rotate: 7200,
  // repeat: -1,
  scrollTrigger: {
    trigger: "#page1 #box", // 触发动画的元素
    start: "top center", // 动画开始的滚动位置
    end: "top 100px", // 动画结束的滚动位置
    scrub: 10,
  },
});
