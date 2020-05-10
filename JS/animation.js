var x = null;
var y = null;

var for_break1 = false;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    console.log(x, y);

}

function getMouseX() {
    return x;
}

function getMouseY() {
    return y;
}

function close_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-open-menu");
    document.querySelector(".menu-js").classList.add("animation-close-menu");
    document.querySelector(".container").classList.remove("animation-center-cards-after-open-menu");
    nav_bar.classList.remove("animate-open-navbar-small-device");
    nav_bar.classList.remove("animation-open-navbar");

}

function check_can_pacman_animate(card__link_pacman) {
    let mouse_pos_x = getMouseX();
    let mouse_pos_y = getMouseY();
    let pos_card_pacman_x = getPosition(card__link_pacman).x;
    let pos_card_pacman_y = getPosition(card__link_pacman).y;
    let width_card_pacman = card__link_pacman.clientWidth;
    let height_card_pacman = card__link_pacman.clientHeight;
    if (mouse_pos_x > pos_card_pacman_x &&
        mouse_pos_x < (pos_card_pacman_x + width_card_pacman) &&
        mouse_pos_y > pos_card_pacman_y &&
        mouse_pos_y < (pos_card_pacman_y + height_card_pacman)) {
        return true;
    }
    else {
        return false;
    }
}

function task(i, pacman_title, card__link_pacman) {
    setTimeout(function () {


        if (check_can_pacman_animate(card__link_pacman)) {
            pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) ${i}%, rgb(59, 15, 218) ${i + 1}%);`;
            for_break1 = false;
        }
        else {
            pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) 0%, rgb(59, 15, 218) 1%);`;
            for_break1 = true;
        }

    }, 20 * i);
}

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
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
            this.parentNode.parentNode.querySelector('.front-side-js').classList.add("animation-rotate-card-front");
            this.parentNode.parentNode.querySelector('.back-side-js').classList.add("animation-rotate-card-back");
        })
    });


    var back_buttons = document.querySelectorAll(".back-js"); // obsługa kliku przycisku back na kafelku

    back_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.querySelector('.front-side-js').classList.remove("animation-rotate-card-front");
            this.parentNode.parentNode.querySelector('.back-side-js').classList.remove("animation-rotate-card-back");
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



    var pacman_photo = document.querySelector(".card__icon-js");
    let pacman_title = document.querySelector(".card__title-js");
    let card__link_pacman = document.querySelector(".card__link--pacman");
    console.log(getPosition(card__link_pacman).x, getPosition(card__link_pacman).y);
    pacman_photo.addEventListener("webkitAnimationStart", function () {
        console.log("test");
        // root.style.setProperty('--pacman-eat-1', e.clientX + "px");
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                // pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) ${i}%, rgb(59, 15, 218) ${i + 1}%);`;
                task(i, pacman_title, card__link_pacman)
                // if (for_break1 === true) {
                //     i = 0;
                // }


            }
        }, 1000);

        setInterval(() => {
            // pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) 0%, rgb(59, 15, 218) 1%);`;
        }, 3000);

    })

    card__link_pacman.addEventListener("mouseleave", function () {
        pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) 0%, rgb(59, 15, 218) 1%);`;
    })





})


