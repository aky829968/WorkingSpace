gsap.from("#head", {
  opacity: 0,
  duration: 1.5,
  y: 200,
  scrollTrigger: {
    trigger: "#head",
    scroller: "body",
    start: "top 120%",
  },
});
gsap.from("#maind", {
  opacity: 0,
  duration: 1.5,
  x: -1500,
  scrollTrigger: {
    trigger: "#head",
    scroller: "body",
    start: "top 120%",
  },
});
// var tl = gsap.timeline();
gsap.from(".anim", {
  opacity: 0,
  duration: 1.2,
  x: 1200,
  scrollTrigger: {
    trigger: ".anim",
    scroller: "body",
    // start: "top 120%",
  },
});
gsap.from(".main3", {
  opacity: 0,
  delay: 0.7,
  duration: 1.2,
  x: 1200,
  scrollTrigger: {
    trigger: ".main3",
    scroller: "body",
    // start: "top 120%",
  },
});
gsap.from(".btn", {
  opacity: 0,
  delay: 1,
  duration: 1,
  x: 1200,
  scrollTrigger: {
    trigger: ".btn",
    scroller: "body",
    // start: "top 120%",
  },
});
gsap.from(".main4", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".main4",
    scroller: "body",
  },
});
gsap.from(".faq", {
  opacity: 0,
  x: -500,
  scrollTrigger: {
    trigger: ".faq",
    scroller: "body",
  },
});
gsap.from(".faq-items .faq-in", {
  opacity: 0,
  y: 20,

  stagger: 1,
  scrollTrigger: {
    trigger: ".faq-items .faq-in",
    scroller: "body",
  },
});

// gsap.from("footer", {
//     position: "fixed",
// //   opacity: 0,
//   scrollTrigger: {
//     trigger: "footer",
//     scroller: "body",
//     start: "top 100%",
//   },
// });
