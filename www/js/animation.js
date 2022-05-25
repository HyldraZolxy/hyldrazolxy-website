$(document).ready(function() {
    $("#menuMobileOpen").on("click", () => {
        $("nav").removeClass("hidden");
    });

    $("#menuMobileClose").on("click", () => {
        $("nav").addClass("hidden");
    });
});