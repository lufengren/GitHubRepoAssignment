$(function(){
    $("button").click(function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var emailaddress = $("#emailaddress").val();
        var contactno = $("#contactno").val();
        var newtr = $("<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+emailaddress+"</td><td>"+contactno+"</td></tr>");
        $("table thead").append(newtr);
        return false;
    });
});

