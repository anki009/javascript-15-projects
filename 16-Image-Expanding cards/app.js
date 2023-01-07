const panelElements = document.querySelectorAll(".panel");

function removeActiveClass() {
  panelElements.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panelElements.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
