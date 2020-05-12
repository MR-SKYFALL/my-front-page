function open_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-close-menu");
    document.querySelector(".menu-js").classList.add("animation-open-menu");

    if (document.querySelector('html').clientWidth > 700) {
        document.querySelector(".container").classList.add("animation-center-cards-after-open-menu");
    }
    if (document.querySelector('html').clientWidth < 450) {
        nav_bar.classList.add("animate-open-navbar-small-device");
    }
    else {
        nav_bar.classList.add("animation-open-navbar");
    }

}
function close_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-open-menu");
    document.querySelector(".menu-js").classList.add("animation-close-menu");
    document.querySelector(".container").classList.remove("animation-center-cards-after-open-menu");
    nav_bar.classList.remove("animate-open-navbar-small-device");
    nav_bar.classList.remove("animation-open-navbar");
    // var input_checkbox = document.querySelector("#toggle-nav");
    // input_checkbox.checked = false;
}