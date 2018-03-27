$(function(){
    $("img").click(function(){
        var test = $(this).attr("data-alt-src");
        $(this).attr("src",test);
    });
});