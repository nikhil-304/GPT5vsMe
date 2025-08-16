var tl = gsap.timeline();

tl.from("#premium-txt h1", {
  x: -550, // starts fully below container
  delay: 0.6,
  duration: 0.7,
  ease: "elastic.out(1, 0.8)",
});

tl.from(
  "#frontend-txt h1",
  {
    y: "100%", // starts fully below container
    delay: 0.6,
    duration: 0.7,
    ease: "power4.out",
  },
  "-=0.5"
);

tl.from(
  "#icons h1",
  {
    x: 400, // move from bottom
    duration: 1, // each element duration
    ease: "elastic.out(1, 0.8)",
    stagger: 0.1, // delay between each element
  },
  "-=1"
);

tl.from("#icons > .icon", {
  y: "100%", // move from bottom
  opacity: 0, // fade in as well
  duration: 1, // each element duration
  ease: "elastic.out(1, 0.5)",
  stagger: 0.1, // delay between each element
});

tl.from(
  "#btm-txt p",
  {
    y: 150,
    stagger: 0.25,
    duration: 0.5,
    delay: 0.6,
  },
  "-=1"
).from(
  "#btm-txt button",
  {
    y: "100%",
    stagger: 0.25,
    duration: 0.5,
    delay: 0.6,
  },
  "=-0.5"
);

tl.from(
  "#nav1",
  {
    x: -500,
    stagger: 0.5,
    duration: 1,
    delay: 0.6,
    ease: "elastic.out(1, 1)",
  },
  "-=2"
)
  .from(
    "#nav2",
    {
      x: 300,
      stagger: 0.25,
      duration: 1,
      delay: 0.6,
      ease: "elastic.out(1, 0.8)",
    },
    "-=2"
  )
  .from(
    "#left-circle",
    {
      x: -500,
      stagger: 0.25,
      duration: 0.5,
      delay: 0.6,
      ease: "circ.out",
    },
    "-=1"
  )
  .from(
    "#right-circle",
    {
      x: 500,
      stagger: 0.25,
      duration: 0.5,
      delay: 0.6,
      ease: "circ.out",
    },
    "-=1.1"
  );
