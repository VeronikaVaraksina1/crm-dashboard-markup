const buttonToggles = document.querySelectorAll(".sidebar__menu_toggle");
const sidebar = document.querySelector(".sidebar");

buttonToggles.forEach((btn) =>
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    })
);

document.addEventListener("click", (e) => {
    // Перевіряємо, чи натискали ми не на меню і не на кнопку
    if (!sidebar.contains(e.target) && !buttonToggles[0].contains(e.target)) {
        sidebar.classList.remove("open");
    }
});
