let page1 = () => {
  let tl = gsap.timeline();
  tl.to(".text h1", {
    y: "-120px",
    stagger: 0.09,
  });
};
page1();

let cursor = () => {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
    });
  });
  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
};
cursor();

let videoCursor = () => {
  let videoContainer = document.querySelector("#video");
  let video = document.querySelector("#video video");
  let play = document.querySelector("#play");

  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", (e) => {
      gsap.to("#play", {
        left: e.x - 520,
        top: e.y - 200,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    gsap.to("#play", {
      left: "75%",
      top: "-10%",
    });
  });

  let flag = 0;
  play.addEventListener("click", () => {
    if (flag == 0) {
      video.style.opacity = 1;
      video.play();
      gsap.to(play, {
        scale: 0.6,
        y: "-100px",
      });
      play.innerHTML = `<i class="ri-pause-line"></i>`;
      flag = 1;
    } else {
      video.style.opacity = 0;
      video.pause();
      gsap.to(play, {
        scale: 1,
      });
      play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
      flag = 0;
    }
  });
};
videoCursor();

function sheryAnimation() {
  Shery.imageEffect(".two-img", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6697387727205446 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 3.13, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.53, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.41, range: [0, 2] },
      noise_scale: { value: 7.63, range: [0, 100] },
    },
    gooey: true,
  });
}
sheryAnimation();
