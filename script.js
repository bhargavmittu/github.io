// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") {
    navLinks.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

// Active section highlight
const sections = document.querySelectorAll("section[id]");
const navA = document.querySelectorAll(".nav-links a");

const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navA.forEach(a => a.classList.remove("active"));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      link?.classList.add("active");
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => obs.observe(s));

// Scroll progress bar
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const bar = document.querySelector(".progress");
  if (bar) bar.style.width = p + "%";
});
