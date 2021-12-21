$(document).ready(function() {
    $( "div:even:last" ).click(function () {
        $( "div:last" ).css( "background-color", "blue");
        $( "div:last" ).css( "color", "white");
        $( "div:last" ).css( "height", "+=200");
    });
});