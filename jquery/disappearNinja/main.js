$(function(){
    $("#container img").click(function(){
        $(this).hide();
    });
    $("#reset").click(function(){
        $("#container img").show();
    });
});
