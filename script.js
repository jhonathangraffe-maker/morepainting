const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}

const projectSlides = document.querySelectorAll(".project-slide");
const projectDots = document.querySelectorAll(".project-dot");
const projectPrev = document.querySelector(".project-prev");
const projectNext = document.querySelector(".project-next");

let currentProject = 0;

function showProject(index) {
  if (!projectSlides.length) return;

  currentProject = (index + projectSlides.length) % projectSlides.length;

  projectSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentProject);
  });

  projectDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentProject);
  });
}

if (projectPrev && projectNext) {
  projectPrev.addEventListener("click", () => {
    showProject(currentProject - 1);
  });

  projectNext.addEventListener("click", () => {
    showProject(currentProject + 1);
  });
}

projectDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showProject(Number(dot.dataset.project));
  });
});

showProject(0);
