const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const home = document.getElementById("home");

let tooltip = new bootstrap.Tooltip(menuBtn);

menuBtn.onclick = function () {
  sidebar.classList.toggle("hide");
  home.classList.toggle("full-width");

  if (sidebar.classList.contains("hide")) {
    menuBtn.setAttribute("data-bs-original-title", "Open sidebar");
  } else {
    menuBtn.setAttribute("data-bs-original-title", "Close sidebar");
  }

  tooltip.dispose();
  tooltip = new bootstrap.Tooltip(menuBtn);
};
