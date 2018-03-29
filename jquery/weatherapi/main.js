$(function(){

$("button").click(function(){
    var inputval = $("input").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+inputval+"&&appid=eb662909d028ee384240bf42c4534bda",function(res){
        var name = res.name;
        var temp = res.main.temp;
        $("#result").html("<h1>"+name+"</h1><p>Tempeture: "+temp+"</p>");
    },"json");
    return false;
});
});