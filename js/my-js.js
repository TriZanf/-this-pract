$(document).ready(function() {
    $(".box").on("cick", function() {
        var classNames = $(this).split(" ");
        $("." + className[1]).css("background-color", "red");
    });
});