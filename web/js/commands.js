/* global tablas, attributesNoRepetition */
var cont = 0; //attributes
var cont2 = 0; //Tables names
var cont3 = 0; //operadores
var operadores = [];
operadores.push(">");
operadores.push("=");
operadores.push("<>");
operadores.push("<=");
operadores.push(">=");



function selectHandler() {
    cont++;
    $("#boxSQL").append(" select ");
    $("#boxSQL").append("<select class='select' id='attributeTS" + cont + "' name='attributeTS" + cont + "'></select>");

    for (var i = 0; i < attributesNoRepetition.length; i++) {
        var o = new Option(attributesNoRepetition[i], attributesNoRepetition[i]);
        $(o).html(attributesNoRepetition[i]);
        $("#attributeTS" + cont).append(o);

    }
    var o = new Option("*", "*");
    $(o).html("*");
    $("#attributeTS" + cont).append(o);

}
function fromHandler() {
    cont2++;
    $("#boxSQL").append(" from ");
    $("#boxSQL").append("<select class='select' id='nombreTS" + cont2 + "' name='nombreTS'></select>");

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
}
function whereHandler() {
    $("#boxSQL").append(" where ");
    $("#boxSQL").append("<input type='text' id='cond1' name='cond1'></input>");
    $("#boxSQL").append("<select class='select' id='operador' name='operador'></select>");
    for (var l = 0; l < operadores.length; l++) {
        var o = new Option(operadores[l], operadores[l]);
        $(o).html(operadores[l]);
        $("#operador").append(o);

    }
$("#boxSQL").append("<input type='text' id='cond2' name='cond2'></input>");
}
function notHandler() {
    $("#boxSQL").append(" not in (");
    $("#buttonsAction").append("<button id='closeN' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
}
function inHandler() {
    $("#boxSQL").append(" in (");
    $("#buttonsAction").append("<button id='closeI' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
}

function limpiarTablero() {
    $("#boxSQL").empty();
}

function getQuery(){
   alert($("#boxSQL").html()); 
}
function cerrarP() {
    $("#boxSQL").append(" )");
    $("#closeI").remove();
    $("#closeN").remove();
}