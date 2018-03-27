$(function(){
    $("#container img").click(function(){
        $(this).css("visibility","hidden");
    });
    $("#reset").click(function(){
        $("#container img").css("visibility","visible");
    });
});
