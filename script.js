const MENU_TOGGLER = document.getElementsByClassName("menu-toggler");
const NEVMENU_WRAPPER = document.querySelector(".navmenu-wrapper");
const NEVMENU_CONTENT = document.querySelector(".navmenu-content");

NEVMENU_WRAPPER.addEventListener("click", closeMenu)
for (button of MENU_TOGGLER) {
    button.addEventListener("click", toggleMenu);

}

function toggleMenu() {
    if (!NEVMENU_WRAPPER.classList.contains("active-navmenu-wrapper")) {
        document.body.style.overflowY = "hidden";
        NEVMENU_CONTENT.classList.add("active-navmenu-content");
        NEVMENU_WRAPPER.classList.add("active-navmenu-wrapper");
        NEVMENU_WRAPPER.style.zIndex = 100
    }
    else {
        closeMenu();
    }
}

function closeMenu() {
    NEVMENU_CONTENT.classList.remove("active-navmenu-content");
    setTimeout(function () {
        NEVMENU_WRAPPER.classList.remove("active-navmenu-wrapper");
        document.body.style.overflowY = "auto";


    }, 400);

    setTimeout(function () {
        NEVMENU_WRAPPER.style.zIndex = null
    }, 600);
}


