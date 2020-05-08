document.addEventListener('DOMContentLoaded', () => {

    var info_buttons = document.querySelectorAll(".info-js");

    info_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.getElementsByTagName('div')[0].classList.add("animation-rotate-card-front");
            this.parentNode.parentNode.getElementsByTagName('div')[1].classList.add("animation-rotate-card-back");
        })
    });


    var back_buttons = document.querySelectorAll(".back-js");

    back_buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.parentNode.parentNode.getElementsByTagName('div')[0].classList.remove("animation-rotate-card-front");
            this.parentNode.parentNode.getElementsByTagName('div')[1].classList.remove("animation-rotate-card-back");
        })
    });

})