$(function(){
    $("img").click(function(){
        var houseid = $(this).attr("id");
        $.get("https://anapioficeandfire.com/api/houses/"+houseid,function(res){
        var result="";
        result +="<h3>Name: "+res.name+"</h3><h3>Words: "+res.words+"</h3>";
        console.log(res.name);
        result +="<p>"+res.titles+"</p>";
        $("#detail").html(result);
        },"json");
        
    });
});
