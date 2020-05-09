function close_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-open-menu");
    document.querySelector(".menu-js").classList.add("animation-close-menu");
    document.querySelector(".container").classList.remove("animation-center-cards-after-open-menu");
    nav_bar.classList.remove("animate-open-navbar-small-device");
    nav_bar.classList.remove("animation-open-navbar");

}

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



document.addEventListener('DOMContentLoaded', () => {

    var info_buttons = document.querySelectorAll(".info-js"); // obsługa kliku przycisku info na karcie

    info_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.getElementsByTagName('div')[0].classList.add("animation-rotate-card-front");
            this.parentNode.parentNode.getElementsByTagName('div')[1].classList.add("animation-rotate-card-back");
        })
    });


    var back_buttons = document.querySelectorAll(".back-js"); // obsługa kliku przycisku back na kafelku

    back_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.getElementsByTagName('div')[0].classList.remove("animation-rotate-card-front");
            this.parentNode.parentNode.getElementsByTagName('div')[1].classList.remove("animation-rotate-card-back");
        })
    });


    var back_all_card_and_nav_div = document.querySelector(".back-all-card-js"); // obsługa kliku na tło a nastepnie zamkniecie navbaru i kart

    back_all_card_and_nav_div.addEventListener("click", function () {
        var all_card_front = document.querySelectorAll(".front-side-js");

        all_card_front.forEach(card_front => {
            card_front.parentNode.getElementsByTagName('div')[0].classList.remove("animation-rotate-card-front");
            card_front.parentNode.getElementsByTagName('div')[1].classList.remove("animation-rotate-card-back");
        });

        var hamburger = document.querySelector(".hamburger-js");
        var navbar = document.querySelector(".navbar-js");
        close_nav_action(navbar);

    })

    var hamburger = document.querySelector(".hamburger-js"); // obsluga zamykania/otwierania navbaru

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

})


