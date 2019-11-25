<%-- 
    Document   : index
    Created on : 24/11/2019, 10:33:07 PM
    Author     : MedinaVilla
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%        
    String query = request.getParameter("query");
    
%>
<html>
    <head>
        <title>SQL</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/bulma.css" type="text/css"/>
        <link rel="icon" href="img/sql.jpg" type="image/icon type">
        <script src="./js/jquery.min.js"></script>
        <script type="text/javascript" src="./js/tableR.js?2"></script>
        <script type="text/javascript" src="./js/commands.js?9"></script>
        <script type="text/javascript" src="./js/attribute.js?2"></script>
    </head>
    <body>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        SQL Validate
                    </h1>
                    <h2 class="subtitle">
                        Practique y arme sus sentencias SQL para verificar que estan correctamente construidas
                    </h2>
                </div>
            </div>
        </section>
        <hr/>
        <div class="columns">
            <aside class="column is-one-fifth">
                <div class="menu">
                    <p class="menu-label">
                        &nbsp; Componentes
                    </p>
                    <ul class="menu-list">
                        <li>
                            <button onClick="selectHandler();" class="button is-fullwidth"><center>Select</center></button>
                            <br/>
                            <button onclick="fromHandler();" class="button is-fullwidth"><center>from</center></button>
                            <br/>
                            <button onclick="whereHandler();" class="button is-fullwidth"><center>where</center></button>
                            <br/>
                            <button onclick="notHandler();" class="button is-fullwidth"><center>not in</center></button>
                            <br/>
                            <button onclick="inHandler();" class="button is-fullwidth"><center>in</center></button>
                        </li>
                    </ul> 
                </div>
            </aside>
            <div class="column is-three-fifths">
                <nav class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div id="buttonsAction" class="level-item">
                            <button onclick="limpiarTablero();" class="button is-danger"><strong>Limpiar</strong>&nbsp;tablero</button>&nbsp;
                            <button onclick="getQuery();" class="button is-success" type="submit"><strong>Verificar</strong>&nbsp;sentencia</button>&nbsp;
                        </div>
                    </div>

                    <div class="level-right">
                        <button onClick="showInputTable();" class="button is-info"><strong>Crear</strong>&nbsp;tabla</button>&nbsp;
                    </div>
                </nav>
                <div id="boxSQL" name="boxSQL" class="box">
                    <form action="#" method="post">
                    <!--<select style="display:none;" id='attributeTS' name='attributeTS'></select>-->
                    </form>
                </div>
            </div>
            <div class="column is-one-fifth">
                <center><p class='subtitle'>Tablas</p></center>
                <hr/>
                <section id="tables" name="tables" class="box">

                </section>
            </div>
        </div>
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class='box'>
                    <center><p class="title">Agregar tabla</p></center>
                    <div class="field">
                        <label class="label">Nombre de la tabla</label>
                        <div class="control">
                            <input id="nombreT" name="nombreT" class="input" type="text" placeholder="Tabla">
                        </div>

                        <div class="field">
                            <label class="label">Atributos <small>*Si no es necesario, dejar en blanco</small></label>
                            <div class="control">
                                <div class="columns" id="atrributes" name="attributes">
                                    <div id="attribute" class="column is-half">
                                        <input id='nombreA1' name="nombreA1" class="input" type="text" placeholder="Nombre del atributo">
                                    </div>
                                    <div id="dataType" class="column is-one-quarter">
                                        <input id='dataType1'name="dataType1" class="input" type="text" placeholder="Tipo de dato">
                                    </div>
                                    <div id="sizeData" class="column is-one-quarter">
                                        <input id='sizeData1'name="sizeData1" class="input" type="text" placeholder="Tamaño">
                                    </div>
                                </div>
                                <div id="buttonsAttribute">
                                    <button onClick="addAttribute();" class="button">Agregar</button>
                                </div>
                            </div>
                        </div>
                        <button onclick="agregarTabla();" class="button is-link">Agregar tabla</button>
                    </div>
                </div>
                <button onclick="closeInputTable();" class="modal-close is-large" aria-label="close"></button>
            </div>
    </body>
</html>

