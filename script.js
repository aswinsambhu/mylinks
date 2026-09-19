
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity .6s ease, transform .6s ease, padding .3s ease, background .3s ease";
    observer.observe(item);
  });

  const counter = document.querySelector(".section-head span:last-child");
  if (counter) counter.textContent = `01 — ${String(items.length).padStart(2, "0")}`;
});
