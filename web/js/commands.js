/* global tablas */

function selectHandler() {
    $("#boxSQL").prepend("select ");
    $("#boxSQL").append("<select id='attributeTS' name='attributeTS'></select>");
    for (var i = 0; i < tablas.length; i++) {
        for (var j = 0; j < tablas[i].atributos.length; i++) {
            var o = new Option(tablas[i].atributos[j].toString(), tablas[i].atributos[j].toString());
/// jquerify the DOM object 'o' so we can use the html method
            $(o).html(tablas[i].atributos[j].toString());
            $("#attributeTS").append(o);
        }
    }
    var o = new Option("*", "*");
    $(o).html("*");
    $("#attributeTS").append(o);

}
function fromHandler() {
    $("#boxSQL").append(" from ");
    $("#boxSQL").append("<select id='nombreTS' name='nombreTS'></select>");
    for (var i = 0; i < tablas.length; i++) {
        var o = new Option(tablas[0].nombre.toString(), tablas[0].nombre.toString());
/// jquerify the DOM object 'o' so we can use the html method
        $(o).html(tablas[0].nombre.toString());
        $("#nombreTS").append(o);
    }
}
function whereHandler() {
    $("#boxSQL").append(" where ");

}
function notHandler() {
    $("#boxSQL").append(" not ");

}
function inHandler() {
    $("#boxSQL").append(" in ");

}

function limpiarTablero() {
    $("#boxSQL").empty();
}