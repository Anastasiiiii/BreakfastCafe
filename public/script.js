$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal('show');
    });
    $("#closeButton").click(function() {
        $("#loginModal").modal('hide');
    });
    $("#cancelLoginButton").click(function() {
        $("#loginModal").modal('hide');
    });
    $("#reserveTableButton").click(function() {
        $("#reserveModal").modal('show');
    });
    $("#closeModalButton").click(function() {
        $("#reserveModal").modal('hide');
    });
    $("#cancelReserveButton").click(function() {
        $("#reserveModal").modal('hide');
    });

    $('#loginModal').modal('show');
});

if (typeof window !== 'undefined') {
    window.onload = function() {
        var input = document.getElementById("input");
        var comments = document.getElementById("comments");
        input.oninput = function() {
            comments.innerHTML = input.value;
        };
    };
}