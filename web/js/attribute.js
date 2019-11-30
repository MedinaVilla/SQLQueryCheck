/* global cont, cont2 */

let attributeNumber = 1;
let buttonHandler = true;

function addAttribute() {
    attributeNumber++;
    $("#attribute").append("<input id='nombreA" + attributeNumber + "' id='nombreA" + attributeNumber + "' class='input' type='text' placeholder='Nombre del atributo'>");
    $("#dataType").append("<input id='dataType" + attributeNumber + "' id='dataType" + attributeNumber + "' class='input' type='text' placeholder='Tipo de dato'>");
    $("#sizeData").append("<input id='sizeData" + attributeNumber + "' id='sizeData" + attributeNumber + "' class='input' type='text' placeholder='Tamaño'>");

    if (attributeNumber === 2 && buttonHandler) {
        $("#buttonsAttribute").prepend("<button id='removeAB' name='removeAB' onClick='removeAttributeT();' class='button is-danger'>Quitar</button>");
        buttonHandler = false;
    }
}
function removeAttributeT() {
    if (attributeNumber >= 1) {
        $("#nombreA" + attributeNumber + "").remove();
        $("#dataType" + attributeNumber + "").remove();
        $("#sizeData" + attributeNumber + "").remove();
        attributeNumber--;
        if (attributeNumber === 1) {
            $("#removeAB").remove();
            buttonHandler = true;
        }
    }
}


