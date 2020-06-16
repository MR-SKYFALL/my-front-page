var clipboard = new ClipboardJS('.copy-button-js');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

function open_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-close-menu");
    document.querySelector(".menu-js").classList.add("animation-open-menu");

    if (document.querySelector('html').clientWidth >= 850) { //rwd
        document.querySelector(".contact").classList.add("animation-center-cards-after-open-menu");
    }
    if (document.querySelector('html').clientWidth < 850) {
        nav_bar.classList.add("animate-open-navbar-small-device");
    }
    else {
        nav_bar.classList.add("animation-open-navbar");
    }

}
function close_nav_action(nav_bar) {

    document.querySelector(".menu-js").classList.remove("animation-open-menu");
    document.querySelector(".menu-js").classList.add("animation-close-menu");
    document.querySelector(".contact").classList.remove("animation-center-cards-after-open-menu");
    nav_bar.classList.remove("animate-open-navbar-small-device");
    nav_bar.classList.remove("animation-open-navbar");
 
}
document.addEventListener('DOMContentLoaded', () => {

    var send_button = document.querySelector(".contact__btn-js"); // action for send to me button

    // document.querySelector(".contact__front-js").classList.add("animation-rotate-card-front");
    //     document.querySelector(".contact__back-js").classList.add("animation-rotate-card-back"); //! default rotate

    send_button.addEventListener("click", function () {
        document.querySelector(".contact__front-js").classList.add("animation-rotate-card-front");
        document.querySelector(".contact__back-js").classList.add("animation-rotate-card-back");
    })

    var back_button = document.querySelector(".contact__back-icon-js"); // action for back to contact

    back_button.addEventListener("click", function () {
        document.querySelector(".contact__front-js").classList.remove("animation-rotate-card-front");
        document.querySelector(".contact__back-js").classList.remove("animation-rotate-card-back");
        document.querySelector(".correct-mail-send-js").classList.remove("show_mail_send_info");
        
    })


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
        if (input_checkbox.checked === true) {
            input_checkbox.checked = false;
            close_nav_action(navbar);
        }

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

    var errors_elements = document.querySelectorAll(".errors-js");
    errors_elements.forEach(simple_error_element => {
        if(simple_error_element.innerHTML != "")
        {
            simple_error_element.parentElement.querySelector(".underline-js").style = "background-color: red;";
        }
        else
        {
            simple_error_element.parentElement.querySelector(".underline-js").style = "background-color: #2B6F71;";
        }
    });
})
