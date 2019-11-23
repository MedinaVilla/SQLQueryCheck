function showInputTable() {
    $(".modal").addClass("is-active");
}
function closeInputTable() {
    $(".modal").removeClass("is-active");
}
function agregarTabla() {
    $(".modal").removeClass("is-active");
    $("#tables").prepend("<div> new div </div><hr/>");
}