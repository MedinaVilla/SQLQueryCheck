/* global attributeNumber */

let tablas = [];
var attributesNoRepetition = new Array(0);

$(document).ready(function () {
    $("#bienvenida").addClass("is-active");
});

function empezarPrograma() {
    $(".modal").removeClass("is-active");
}

function showInputTable() {
    $("#addTable").addClass("is-active");
    $("#arrow2").removeClass("arrow2");
    $("#arrow2").empty();
}

function closeInputTable() {
    $(".modal").removeClass("is-active");
}
function agregarTabla() {
    var array = new Array(0);
    $(".modal").removeClass("is-active");
    $("#tables").append("<div><strong>" + $("#nombreT").val() + "</strong></div>");

    for (var i = 1; i <= attributeNumber; i++) {
        $("#tables").append("<div>" + $("#nombreA" + i).val() + " " + $("#dataType" + i).val() + " (" + $("#sizeData" + i).val() + ")</div>");
        array.push($("#nombreA" + i).val());

        if (attributesNoRepetition.indexOf($("#nombreA" + i).val().toString()) === -1)
            attributesNoRepetition.push($("#nombreA" + i).val());
    }
    $("#tables").append("<hr/>");
    tablas.push({'nombre': $("#nombreT").val(), 'atributos': [array]});
    limpiarTablero();
}