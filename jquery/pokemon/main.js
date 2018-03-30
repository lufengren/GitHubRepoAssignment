function appendinfo(){
    $("#pictures").append("<div class='info'></div>");
}

$(function () {
    appendinfo();
    for (var i = 1; i < 152; i++) {
        var path="https://pokeapi.co/media/img/"+i+".png";
        $("#pictures").append("<img id="+i+" src=" + path + ">");
    }
    $("#pictures").on("click","img",function(){
        var imgid = $(this).attr("id");
        $.get("https://pokeapi.co/api/v2/pokemon/"+imgid+"/",function(res){
            var name = res.name;
            var weight = res.weight;
            var height = res.height;
            var type1 = res.types[0].type.name;
            var type2 = res.types[1].type.name;
            var showinfo = "";
            var imgsrc = "http://pokeapi.co/media/img/"+imgid+".png";
            showinfo += "<h1>"+name+"</h1>";
            showinfo += "<img src="+imgsrc +">";
            //showinfo += "<img src='http://img/" + imgid + ".png'>";
            showinfo += "<h4>Types:</h4><ul><li>"+type1+"</li><li>"+type2+"</li></ul><br>";
            showinfo += "<h4>Height:</h4><p>"+height+"</p><br>";
            showinfo += "<h4>Weight:</h4><p>"+weight+"</p>"
            $(".info").html(showinfo);
            
        })

    })
    
});
