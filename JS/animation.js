var x = null;
var y = null;


document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    // console.log(x, y);

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

    var info_buttons = document.querySelectorAll(".info-js"); // action for info button on the card

    info_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.querySelector('.front-side-js').classList.add("animation-rotate-card-front");
            this.parentNode.parentNode.querySelector('.back-side-js').classList.add("animation-rotate-card-back");
        })
    });


    var back_buttons = document.querySelectorAll(".back-js"); // action for back button on the back of card

    back_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.querySelector('.front-side-js').classList.remove("animation-rotate-card-front");
            this.parentNode.parentNode.querySelector('.back-side-js').classList.remove("animation-rotate-card-back");
        })
    });


    var back_all_card_and_nav_div = document.querySelector(".back-all-card-js"); // action for clicking on the background and then closing the navbar and tabs

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

    // PACMAN EATING ACTION
    var pacman_photo = document.querySelector(".card__icon-js");
    let pacman_title = document.querySelector(".card__title-js");
    let card__link_pacman = document.querySelector(".card__link--pacman");
    var interval_animation;
    var start_delay = -90; // higher value gives more delay
    var animation_simple_tik_counter = start_delay;
    var animation_speed = 14 // higher value gives more speed


    pacman_photo.addEventListener("webkitAnimationStart", function () {
        animation_simple_tik = start_delay;
        interval_animation = setInterval(() => {
            if (animation_simple_tik_counter >= 0) {
                pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) ${animation_simple_tik_counter}%, rgb(43, 111, 113) ${animation_simple_tik_counter + 1}%);`;
            }
            animation_simple_tik_counter++;

        }, animation_speed);
    })

    card__link_pacman.addEventListener("mouseleave", function () {
        // console.log("left");
        clearInterval(interval_animation);
        animation_simple_tik_counter = start_delay;
        pacman_title.style = `background-image: linear-gradient(90deg, rgba(204, 59, 59, 0) 0%, rgb(43, 111, 113) 1%);`;
        console.log(animation_simple_tik_counter);
    })

    //BALL ODD EVEN HOVER
    var ball_link = document.querySelector(".card__link--ball-js");
    let ball_icon = ball_link.querySelector(".card__icon--4")
    // ball_link.addEventListener("mouseover", function () {

    //     let ball_icon = this.querySelector(".card__icon--4")
    //     if (ball_icon.getAttribute("type_animation") === "odd") {
    //         ball_icon.style = `animation: animation-ball-odd 2s;animation-timing-function: linear;`;
    //         ball_icon.setAttribute("type_animation", "even");

    //     }
    //     else {
    //         ball_icon.style = `animation: animation-ball-even 2s;animation-timing-function: linear;`;
    //         ball_icon.setAttribute("type_animation", "odd");
    //     }
    // })

    $(".card__link--ball-js").hover(function () {
        if ($(".card__icon--4").attr("type_animation") == "odd") {
            $(ball_icon).css("animation", "animation-ball-even 2s");
            $(ball_icon).css("animation-timing-function", "linear");
            $(".card__icon--4").attr("type_animation", "even");
        }
        else {
            $(ball_icon).css("animation", "animation-ball-odd 2s");
            $(ball_icon).css("animation-timing-function", "linear");
            $(".card__icon--4").attr("type_animation", "odd");
        }

    });


})


