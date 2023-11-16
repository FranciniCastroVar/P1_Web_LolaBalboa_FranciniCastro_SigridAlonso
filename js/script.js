// JQUERY
$(document).ready(function () {
    // MENÚ
    $(".fa-bars").click(function () {
        $("#menu > ul").css("left", "0");

    });

    $(".option").click(function () {
        $("#menu > ul").css("left", "-100%");
    });


    // GALERÍA DE IMÁGENES
    $(".galery > figure > img").mouseover(function () {
        var ruta = $(this).attr("src").replace("original", "hover");
        $(this).attr("src", ruta);
    });

    $(".galery > figure > img").mouseout(function () {
        var ruta = $(this).attr("src").replace("hover", "original");
        $(this).attr("src", ruta);
    })
});