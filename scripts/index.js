const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    activeClassRemover();
    panel.classList.add("active");
  });
});

const activeClassRemover = () => {
  panels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
      return;
    }
  });
};
