// Efecto simple al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#000";
  } else {
    header.style.backgroundColor = "#111";
  }
});
