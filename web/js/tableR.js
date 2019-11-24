/* global attributeNumber */

let tablas = [];


function showInputTable() {
    $(".modal").addClass("is-active");
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
    }
    $("#tables").append("<hr/>");
    tablas.push({'nombre':$("#nombreT").val(), 'atributos':[array]});
}