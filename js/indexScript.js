document.addEventListener("DOMContentLoaded", function() {
    const tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');
    const mycarousel = document.getElementById("mycarousel");
    const carouselButton = document.getElementById("carouselButton");
    const loginButton = document.getElementById("loginButton");
    const closeButton = document.getElementById("closeButton");
    const cancelLoginButton = document.getElementById("cancelLoginButton");
    const reserveTableButton = document.getElementById("reserveTableButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const cancelReserveButton = document.getElementById("cancelReserveButton");
    const loginLink = document.getElementById("loginLink");

    tooltipElements.forEach(function(element) {
        new bootstrap.Tooltip(element);
    });
    
    const carousel = new bootstrap.Carousel(mycarousel, {
        interval: 2000
    });

    carouselButton.addEventListener("click", function() {
        if (carouselButton.querySelector("span").classList.contains("fa-pause")) {
            carousel.pause();
            carouselButton.querySelector("span").classList.remove("fa-pause");
            carouselButton.querySelector("span").classList.add("fa-play");
        } else if (carouselButton.querySelector("span").classList.contains("fa-play")) {
            carousel.cycle();
            carouselButton.querySelector("span").classList.remove("fa-play");
            carouselButton.querySelector("span").classList.add("fa-pause");
        }
    });

    const signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
    loginButton.addEventListener("click", function() {
        signInModal.show();
    });

    closeButton.addEventListener("click", function() {
        signInModal.hide();
    });

    cancelLoginButton.addEventListener("click", function() {
        signIn.hide();
    });


    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginLink.addEventListener("click", function() {
        signInModal.hide();
        loginModal.show();
    })

    const reserveModal = new bootstrap.Modal(document.getElementById("reserveModal"));
    reserveTableButton.addEventListener("click", function() {
        reserveModal.show();
    });

    closeModalButton.addEventListener("click", function() {
        reserveModal.hide();
    });

    cancelReserveButton.addEventListener("click", function() {
        reserveModal.hide();
    });

    loginModal.show();
});

