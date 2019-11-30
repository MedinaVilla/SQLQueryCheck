<%-- 
    Document   : checkSQL
    Created on : 26/11/2019, 06:09:32 PM
    Author     : MedinaVilla
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="Java.Connector"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="./js/jquery.min.js"></script>
        <script type="text/javascript" src="./js/commands.js?10"></script>
        <!--        <script type="text/javascript" src="./js/check.js?4"></script>-->
    </head>
    <body>
        <%
            String sentenciasArray = request.getParameter("hiddenArrayField");
            String sentenciasArray2 = request.getParameter("hiddenArrayField2");
            String[] sentencias = sentenciasArray.split(",");
            String[] tags = sentenciasArray2.split(",");
            for(int k=0;k<tags.length;k++){
            System.out.println(tags[k]);
            }
            String query = "";
            System.out.println(sentencias.length);
            for (int i = 0; i < sentencias.length; i++) {
                if (sentencias[i].equals("where")) {
                    query = query.concat(sentencias[i] + " ");
                    for (int j = i; j < i + 3; j++) {
                        query = query.concat(tags[j] + " ");
                    }
                } else {
                    query = query.concat(sentencias[i] + " " + tags[i] + " ");
                }
            }
            query = query.concat(";");
            System.out.println(query);
//            System.out.println(sentencias[0]);
//            System.out.println(query2.toString());

            Connector con = new Connector();
            con.conectar();
            try {
                ResultSet res = con.consulta(query);
            } catch (SQLException e) {
                if (e.getMessage().startsWith("You have an error in your SQL syntax")) {
                    System.out.println("Error syntax");
                    response.sendRedirect("/SQLQueryProject?status=incorrect");
                } else {
                    response.sendRedirect("/SQLQueryProject?status=correct");
                }
            }

        %>
    </body>
</html>
