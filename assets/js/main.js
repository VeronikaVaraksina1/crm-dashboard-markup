const buttonToggle = document.querySelector(".sidebar__menu_toggle");
const menu = document.querySelector(".sidebar__menu");

buttonToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});
