document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl
    // cabecalho
    .from(".header", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: "power3.out",
    });
  tl.from(
    ".header__logo",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    "#header__nav li",
    {
      duration: 1,
      opacity: 0,
      stagger: { each: 0.3 },
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".sec1-ft",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );

  // depois do scroll
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".sec1-container", {
    duration: 2,
    delay: 0.2,
    x: -1000,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec1-container",
    },
  });

  gsap.from("#historia h2", {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sec1-container",
    },
  });

  // Jogadores
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#jogadores", {
    duration: 1,
    x: -1000,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#jogadores",
    },
  });

  gsap.from(".secTime-jogadores li", {
    duration: 1,
    delay: 1,

    y: 300,
    opacity: 0,
    ease: "power3.out",
    stagger: { each: 0.3 },
    scrollTrigger: {
      trigger: "#jogadores",
    },
  });

  // Números
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#numeros .secNum-bg", {
    duration: 1.5,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#numeros",
    },
  });

  gsap.from("#numeros .titulo", {
    duration: 1.5,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#numeros",
    },
  });

  gsap.from("#num-card1 img", {
    duration: 1,
    x: -300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#num-card1",
    },
  });

  gsap.from("#num-card1 .card-txt", {
    duration: 1,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#num-card1",
    },
  });

  gsap.from("#num-card2 .card-destaque", {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#num-card2",
    },
  });

  gsap.from("#num-card2 img", {
    duration: 1,
    x: -300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#num-card2",
    },
  });
});

// Meu Código
const btnMobile = document.getElementById("btn__mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("header__nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
