/* global tablas */

function selectHandler() {
    $("#boxSQL").append("select ");
    $("#boxSQL").append("<select id='nombreTS' name='nombreTS'></select>");
    for (var i = 0; i < tablas.length; i++) {
        var o = new Option("option text", "value");
/// jquerify the DOM object 'o' so we can use the html method
        $(o).html("option text");
        $("#nombreTS").append(o);
    }


}
function fromHandler() {
    $("#boxSQL").append("from ");

}
function whereHandler() {
    $("#boxSQL").append("where ");

}
function notHandler() {
    $("#boxSQL").append("not ");

}
function inHandler() {
    $("#boxSQL").append("in ");

}
function limpiarTablero(){
     $("#boxSQL").empty();
}