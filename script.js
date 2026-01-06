// Simple animation effect
document.querySelectorAll("section").forEach(sec => {
  sec.addEventListener("mouseover", () => {
    sec.style.transform = "scale(1.02)";
  });
  sec.addEventListener("mouseout", () => {
    sec.style.transform = "scale(1)";
  });
});
