/* global tablas, attributesNoRepetition */
var cont = 0; //attributes
var cont2 = 0; //Tables names
var cont3 = 0; //operadores
var cont4 = 0;
var sentenciasArray = [];
var tagsSelect = [];

var operadores = [];
operadores.push(">");
operadores.push("=");
operadores.push("<>");
operadores.push("<=");
operadores.push(">=");



function selectHandler() {
    var exist = false;
    cont++;
    $("#boxSQL").append(" select ");
    $("#boxSQL").append("<select class='select' id='attributeTS" + cont + "' name='attributeTS" + cont + "'></select>");

    for (var i = 0; i < attributesNoRepetition.length; i++) {
        var o = new Option(attributesNoRepetition[i], attributesNoRepetition[i]);
        $(o).html(attributesNoRepetition[i]);
        $("#attributeTS" + cont).append(o);
        exist = true;
    }
    var o = new Option("*", "*");
    $(o).html("*");
    $("#attributeTS" + cont).append(o);

    sentenciasArray.push("select");
    tagsSelect.push("attributeTS" + cont + "");

//    if (exist)
//        comboBoxValArray.push(attributesNoRepetition[0]);
//    else
//        comboBoxValArray.push("*");
}
function fromHandler() {
    var exist = false;
    cont2++;
    $("#boxSQL").append(" from ");
    $("#boxSQL").append("<select  class='select' id='nombreTS" + cont2 + "' name='nombreTS'></select>");

    var array2 = [];
    if ($("#attributeTS" + cont).val().toString() !== "*") {
        for (var i = 0; i < tablas.length; i++) {
            for (var j = 0; j < tablas[i].atributos[0].length; j++) {
                if (tablas[i].atributos[0][j].toString() === ($("#attributeTS" + cont).val().toString())) {
                    array2.push(tablas[i].nombre.toString());
                }
            }
        }
        for (var k = 0; k < array2.length; k++) {
            var o = new Option(array2[k], array2[k]);
            $(o).html(array2[k]);
            $("#nombreTS" + cont2 + "").append(o);
        }
    } else {
        for (var i = 0; i < tablas.length; i++) {
            var o = new Option(tablas[i].nombre.toString(), tablas[i].atributos[0].toString());
            $(o).html(tablas[i].nombre.toString());
            $("#nombreTS" + cont2 + "").append(o);
        }
    }
    sentenciasArray.push("from");
    tagsSelect.push("nombreTS" + cont2 + "");
//     if (exist)
//        comboBoxValArray.push(firstElement);
//    else
//        comboBoxValArray.push(" ");
}
function whereHandler() {
    cont4++;
    $("#boxSQL").append(" where ");
    $("#boxSQL").append("<input type='text' id='Fcond" + cont4 + "' name='Fcond" + cont4 + "'></input>");
    $("#boxSQL").append("<select class='select' id='operador" + cont4 + "' 'operador" + cont4 + "'></select>");
    for (var l = 0; l < operadores.length; l++) {
        var o = new Option(operadores[l], operadores[l]);
        $(o).html(operadores[l]);
        $("#operador" + cont4 + "").append(o);

    }
    $("#boxSQL").append("<input type='text' id='Scond" + cont4 + "' name='Scond2" + cont4 + "'></input>");
    sentenciasArray.push("where");
    tagsSelect.push("Fcond" + cont4 + "");
    tagsSelect.push("operador" + cont4 + "");
    tagsSelect.push("Scond" + cont4 + "");
}
function notHandler() {
    $("#boxSQL").append(" not in (");
    $("#buttonsAction").append("<button id='closeN' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
    sentenciasArray.push("not in(");
}
function inHandler() {
    $("#boxSQL").append(" in (");
    $("#buttonsAction").append("<button id='closeI' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
    sentenciasArray.push("in(");
}


function limpiarTablero() {
    cont = 0;
    cont2 = 0;
    cont4 = 0;
    sentenciasArray = [];
    tagsSelect = [];
    $("#boxSQL").empty();
}

function getQuery() {
    var tagsValue = [];
    for (var i = 0; i < tagsSelect.length; i++) {
        if ($("#" + tagsSelect[i] + "").val() !== null)
            tagsValue.push($("#" + tagsSelect[i] + "").val());
        else
            tagsValue.push(" ");
    }
    document.getElementById("hiddenArrayField").value = sentenciasArray;
    document.getElementById("hiddenArrayField2").value = tagsValue;
}
function cerrarP() {
    $("#boxSQL").append(" )");
    $("#closeI").remove();
    $("#closeN").remove();
}
