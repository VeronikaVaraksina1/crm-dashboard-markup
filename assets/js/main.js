const buttonToggles = document.querySelectorAll(".menu_toggle");
const links = document.querySelectorAll(".jsMenu");
const sidebar = document.querySelector(".sidebar");

buttonToggles.forEach((btn) =>
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    })
);

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !buttonToggles[0].contains(e.target)) {
        sidebar.classList.remove("open");
    }
});

links.forEach((link) =>
    link.addEventListener("click", () => {
        links.forEach((item) => item.classList.remove("link_active"));

        if (link.classList.contains("logo")) {
            document
                .querySelector(".nav_menu__link:first-child")
                .classList.add("link_active");
        } else {
            link.classList.add("link_active");
        }
        sidebar.classList.remove("open");
    })
);
