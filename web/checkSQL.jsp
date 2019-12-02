<%-- 
    Document   : checkSQL
    Created on : 26/11/2019, 06:09:32 PM
    Author     : MedinaVilla
--%>

<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.lang.String"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="Java.Connector"%>
<%
    String sentenciasArray = request.getParameter("hiddenArrayField");
    String sentenciasArray2 = request.getParameter("hiddenArrayField2");

    String[] sentencias = sentenciasArray.split(",");
    String[] tags = sentenciasArray2.split(",");
    String query = "";
    for (int i = 0, j = 0; i < sentencias.length; i++, j++) {
        if (sentencias[i].equals("where")) {
            query = query.concat(sentencias[i] + " ");
            query = query.concat(tags[j] + " ");
            j++;
            query = query.concat(tags[j] + " ");
            j++;
            query = query.concat(tags[j] + " ");
        } else if (sentencias[i].equals("in(")) {
            query = query.concat("where" + " ");
            query = query.concat(tags[j] + " ");
            query = query.concat(sentencias[i] + " ");
        } else if (sentencias[i].equals("not in(")) {
            query = query.concat("where" + " ");
            query = query.concat(tags[j] + " ");
            query = query.concat(sentencias[i] + " ");
        } else if (sentencias[i].equals("*)")) {
            j--;
            query = query.concat(")" + " ");
        } else if (sentencias[i].equals("union")) {
            query = query.concat("union" + " ");
        } else if (sentencias[i].equals("group by")) {
            query = query.concat("group by" + " ");
            query = query.concat(tags[j] + " ");
        } else if (sentencias[i].equals("join")) {
            query = query.concat("join" + " ");
            query = query.concat(tags[j] + " ");
            j++;
            query = query.concat("on" + " ");
            query = query.concat(tags[j] + " ");
            j++;
            query = query.concat("=" + " ");
            query = query.concat(tags[j] + " ");
        } else {
            query = query.concat(sentencias[i] + " " + tags[j] + " ");
        }
    }
    query = query.concat(";");
    System.out.println(query);
    Connector con = new Connector();
    con.conectar();
    try {
        ResultSet res = con.consulta(query);
    } catch (SQLException e) {
        if (e.getMessage().startsWith("You have an error in your SQL syntax")) {
            System.out.println("Error syntax");
            out.print("incorrect");
        } else {
            System.out.println("Correct syntax");
            out.print("correct");
        }
    }
%>