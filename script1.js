$(document).ready(function() {
    $( "div:even:last" ).click(function () {
        $( "div:last" ).css( "background-color", "blue" , "height", "+=200");
        $( "div:last" ).css( "height", "+=200");
    });

});