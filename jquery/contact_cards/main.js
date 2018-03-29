$(function(){
    //$(".card").hide();
    $("button").click(function(){
        var cardname = $("#firstname").val()+" "+$
        ("#lastname").val();
        $(".card").append("<div class='borderclass'><h3>"+cardname+"</h3><a href='#'>Click for description!</a></div>");
        return false;
    });

    $(".card").on("click","a",function(){
        var description = $("#description").val();
        $(this).parent().html("<p>"+description+"</p>");
    })
});