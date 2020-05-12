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

var back_all_card_and_nav_div = document.querySelector(".back-all-card-js"); // action for clicking on the background and then closing the navbar and cards

back_all_card_and_nav_div.addEventListener("click", function () {
    var all_card_front = document.querySelectorAll(".front-side-js");

    all_card_front.forEach(card_front => {
        card_front.parentNode.querySelector('.front-side-js').classList.remove("animation-rotate-card-front");
        card_front.parentNode.querySelector('.back-side-js').classList.remove("animation-rotate-card-back");
    });

    // var hamburger = document.querySelector(".hamburger-js");
    var navbar = document.querySelector(".navbar-js");
    var input_checkbox = document.querySelector("#toggle-nav");
    input_checkbox.checked = false;
    close_nav_action(navbar);

})

    var hamburger = document.querySelector(".hamburger-js"); // action for open/close navbar

    hamburger.addEventListener("click", function () {

        var navbar = document.querySelector(".navbar-js");
        var input_checkbox = document.querySelector("#toggle-nav");
        console.log(input_checkbox.checked);
        if (!input_checkbox.checked) {
            open_nav_action(navbar);
        }
        else {
            close_nav_action(navbar);
        }


    })