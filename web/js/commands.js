/* global tablas, attributesNoRepetition, attributesRepetition */
var cont = 0; //attributes
var cont2 = 0; //Tables names
var cont3 = 0; //operadores
var cont4 = 0;
var cont5 = 0;
var cont6 = 0;
var cont7 = 0;
var cont8 = 0;
var sentenciasArray = [];
var tagsSelect = [];

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
        exist = true;
    }
    if (attributesRepetition.length >= 1) {
        for (var k = 0; k < attributesRepetition.length; k++) {
            for (var i = 0; i < tablas.length; i++) {
                for (var j = 0; j < tablas[i].atributos[0].length; j++) {
                    if (tablas[i].atributos[0][j].toString() === attributesRepetition[j]) {
                        var o = new Option(tablas[i].nombre + "." + attributesRepetition[k], tablas[i].nombre + "." + attributesRepetition[k]);
                        $(o).html(tablas[i].nombre + "." + attributesRepetition[k]);
                        $("#attributeTS" + cont).append(o);
                    }
                }
            }
        }
    }

    var o = new Option("*", "*");
    $(o).html("*");
    $("#attributeTS" + cont).append(o);

    sentenciasArray.push("select");
    tagsSelect.push("attributeTS" + cont + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>SELECT:</strong> Suele ir acompañada de un atributo o asterisco. Después del SELECT y los atributos, se continua con la palabra reservada <strong>FROM </strong>" +
            "<br/> Ejemplo: select <strong>nombre from</strong> persona;</div>");
    $("#selectT").removeClass("is-success is-outlined");
    $("#from").addClass("is-success is-outlined");

    $("#messageInfo").remove();
}

function fromHandler() {
    cont2++;
    $("#boxSQL").append(" from ");
    $("#boxSQL").append("<select  class='select' id='nombreTS" + cont2 + "' name='nombreTS'></select>");

    var array2 = [];
    if ($("#attributeTS" + cont).val() !== undefined) {
        if ($("#attributeTS" + cont).val().toString() !== "*") {
            for (var i = 0; i < tablas.length; i++) {
                for (var j = 0; j < tablas[i].atributos[0].length; j++) {
                    var indexDot = $("#attributeTS" + cont).val().toString().indexOf(".");
                    var indexFinal = $("#attributeTS" + cont).val().toString().length;
                    if (tablas[i].atributos[0][j].toString() === ($("#attributeTS" + cont).val().toString()) ||
                            ((tablas[i].atributos[0][j].toString() === ($("#attributeTS" + cont).val().toString().substr(indexDot + 1, indexFinal))) &&
                                    (tablas[i].nombre.toString() === ($("#attributeTS" + cont).val().toString().substr(0, indexDot))))) {
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
    sentenciasArray.push("from");
    tagsSelect.push("nombreTS" + cont2 + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>FROM:</strong> Recuerda que después un FROM sigue el nombre de una tabla de donde se listados las columnas enunciadas \n\
                en el SELECT. Después de un FROM puede ir un </strong>JOIN</strong> o un <strong>WHERE</strong>" +
            "<br/> Ejemplo: select <strong>nombre from <strong>persona</strong> ;</div>");
    $("#from").removeClass("is-success is-outlined");

    $("#messageInfo").remove();
}

function whereHandler() {
    cont4++;
    $("#boxSQL").append(" where ");
    $("#boxSQL").append("<input type='text' id='Fcond" + cont4 + "' name='Fcond" + cont4 + "' required></input>");
    $("#boxSQL").append("<select class='select' id='operador" + cont4 + "' 'operador" + cont4 + "'></select>");
    for (var l = 0; l < operadores.length; l++) {
        var o = new Option(operadores[l], operadores[l]);
        $(o).html(operadores[l]);
        $("#operador" + cont4 + "").append(o);

    }
    $("#boxSQL").append("<input type='text' id='Scond" + cont4 + "' name='Scond2" + cont4 + "' required></input>");
    sentenciasArray.push("where");
    tagsSelect.push("Fcond" + cont4 + "");
    tagsSelect.push("operador" + cont4 + "");
    tagsSelect.push("Scond" + cont4 + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>WHERE:</strong> Recuerda que después WHERE un atributo, el cual, puede ser comparado \n\
            o puedes estar contenido dentro de un select mediante un IN, NOT IN." +
            "<br/> Ejemplo: select nombre from persona <strong> where nombre == 'Jesus'</strong> ;</div>");
    $("#where").removeClass("is-success is-outlined");

    $("#messageInfo").remove();
}

function notHandler() {
    cont5++;
    $("#boxSQL").append("where ");
    $("#boxSQL").append("<select  class='select' id='attributeNot" + cont5 + "' name='attributeNot'></select>");
    for (var i = 0; i < attributesNoRepetition.length; i++) {
        var o = new Option(attributesNoRepetition[i], attributesNoRepetition[i]);
        $(o).html(attributesNoRepetition[i]);
        $("#attributeNot" + cont5).append(o);
        exist = true;
    }
    var o = new Option("*", "*");
    $(o).html("*");

    $("#boxSQL").append(" not in(");
    $("#buttonsAction").append("<button id='closeN' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
    sentenciasArray.push("not in(");
    tagsSelect.push("attributeNot" + cont5 + "");


    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>NOT IN:</strong>Recuerda que después de un NOT IN va una subconsulta la cual inicia con un SELECT." +
            "<br/> Ejemplo: select nombre from persona <strong> where nombre not IN</strong>(select * from robot); ;</div>");
    $("#selectT").addClass("is-success is-outlined");
    $("#not").removeClass("is-success is-outlined");
    $("#messageInfo").remove();
}

function inHandler() {
    cont6++;
    $("#boxSQL").append("where ");
    $("#boxSQL").append("<select  class='select' id='attributeIn" + cont6 + "' name='attributeIn'></select>");
    for (var i = 0; i < attributesNoRepetition.length; i++) {
        var o = new Option(attributesNoRepetition[i], attributesNoRepetition[i]);
        $(o).html(attributesNoRepetition[i]);
        $("#attributeIn" + cont6).append(o);
        exist = true;
    }
    var o = new Option("*", "*");
    $(o).html("*");

    $("#boxSQL").append(" in(");
    $("#buttonsAction").append("<button id='closeN' onClick='cerrarP();' class='small button is-warning'> Cerrar )</button><hr/>");
    sentenciasArray.push("in(");
    tagsSelect.push("attributeIn" + cont6 + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>IN:</strong> Recuerda que después de un IN va una subconsulta la cual inicia con un SELECT." +
            "<br/> Ejemplo: select nombre from persona where nombre <strong>in</strong>(select * from robot);</strong> ;</div>");
    $("#selectT").addClass("is-success is-outlined");
    $("#in").removeClass("is-success is-outlined");
    $("#messageInfo").remove();
}

function unionHandler() {
    $("#boxSQL").append(" union ");
    sentenciasArray.push("union");
    tagsSelect.push("union");
    $("#selectT").addClass("is-success is-outlined");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>UNION:</strong> Recuerda que despues de una UNION, siempre va un SELECT" +
            "<br/> Ejemplo: select nombre from persona <strong>union</strong> select * from robot;</strong> ;</div>");
    $("#union").removeClass("is-success is-outlined");
    $("#messageInfo").remove();
}

function joinHandler() {
    cont8++;
    $("#boxSQL").append(" join ");
    $("#boxSQL").append("<select  class='select' id='attributeJoin" + cont8 + "' name='attributeJoin'></select>");
    $("#boxSQL").append(" ON ");

    for (var i = 0; i < tablas.length; i++) {
        var o = new Option(tablas[i].nombre, tablas[i].nombre);
        $(o).html(tablas[i].nombre);
        $("#attributeJoin" + cont8 + "").append(o);
    }
    $("#boxSQL").append(" <input type='text' id='Fjoin" + cont8 + "' name='Fjoin" + cont8 + "' required></input>");
    $("#boxSQL").append(" = ");
    $("#boxSQL").append("<input type='text' id='Sjoin" + cont8 + "' name='Sjoin" + cont8 + "' required></input>");

    sentenciasArray.push("join");
    tagsSelect.push("attributeJoin" + cont8 + "");
    tagsSelect.push("Fjoin" + cont8 + "");
    tagsSelect.push("Sjoin" + cont8 + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>JOIN:</strong> Recuerde que después de un JOIN va acompañado del nombre de un tabla, sirve para reunir información de tus dos tablas. \n\
            Después de un  JOIN puede ir un ON que te permite comparar algún atributo " +
            "<br/> Ejemplo:select * from Alumno join Robot ON Nombre.id=Robot.id</strong> ;</div>");

    $("#join").removeClass("is-success is-outlined");
}

function groupbyHandler() {
    cont7++;
    $("#boxSQL").append(" group by ");
    $("#boxSQL").append("<select  class='select' id='attributeGB" + cont7 + "' name='attributeGB'></select>");

    for (var i = 0; i < attributesNoRepetition.length; i++) {
        var o = new Option(attributesNoRepetition[i], attributesNoRepetition[i]);
        $(o).html(attributesNoRepetition[i]);
        $("#attributeGB" + cont7).append(o);
        exist = true;
    }
    sentenciasArray.push("group by");
    tagsSelect.push("attributeGB" + cont7 + "");

    $("#hint").empty();
    $("#hint").append("<div class='arrow'>&#8674;</div>");
    $("#hint").append("<div class='notification is-warning'>" +
            "<button class='delete'></button>" +
            "<strong>GROUP BY:</strong>  Después de GROUP BY va un atributo. Te ayuda a que el resultado de tu consulta agrupándolos por el atributo colocado" +
            "<br/> Ejemplo: select nombre from persona <strong>group by</strong> nombre;</div>");

    $("#groupby").removeClass("is-success is-outlined");
    $("#messageInfo").remove();
}

function limpiarTablero() {
    cont = 0;
    cont2 = 0;
    cont4 = 0;
    cont5 = 0;
    cont6 = 0;
    cont7 = 0;
    cont8 = 0;
    sentenciasArray = [];
    tagsSelect = [];
    $("#boxSQL").empty();
    $("#messageInfo").remove();
    $("#closeN").remove();
}

function getQuery() {
    var tagsValue = [];
    for (var i = 0; i < tagsSelect.length; i++) {
        if ($("#" + tagsSelect[i] + "").val() !== null)
            tagsValue.push($("#" + tagsSelect[i] + "").val());
        else
            tagsValue.push(" ");
    }
    var http = new XMLHttpRequest();
    http.open("POST", "http://localhost:8081/SQLQueryProject/check.jsp", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var params = "hiddenArrayField=" + sentenciasArray + "&hiddenArrayField2=" + tagsValue; // probably use document.getElementById(...).value
    http.send(params);
    http.onload = function () {
        if (http.responseText.includes("incorrect")) {
            $("#messageInfo").remove();
            $("#checkSQL").append("<div id='messageInfo' class='notification is-danger'>" +
                    "Oh no! Tu sentencia SQL es incorrecta. Venga, tu puedes!" +
                    "</div>");
        } else {
            $("#messageInfo").remove();
            $("#checkSQL").append("<div id='messageInfo' class='notification is-success'>" +
                    "Genial! Tu sentencia SQL correcta. Sigue asi!" +
                    "</div>");
        }
    };
}

function deleteTables() {
    var url = window.location.href;
    if (url.indexOf('?') === -1) {
        url += '?r=1';
    }
    window.location.href = url;
}

function cerrarP() {
    $("#boxSQL").append(" )");
    sentenciasArray.push("*)");
    $("#closeN").remove();
}

$(window).bind('beforeunload', function () {
    alert("sasa");
    if (sessionStorage.getItem('beenhere') === '1') {
        window.location = "http://localhost:8081/SQLQueryProject/";
    }
    sessionStorage.setItem('beenhere', '1');

});