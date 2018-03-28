$(function(){
    $("#hide").click(function(){
        $("#section1 p").hide();
    });
    $("#show").click(function(){
        $("#section1 p").show();
    });
    $("#toggle").click(function(){
        $("#section1 p").toggle();
    });
    $("#slideUp").click(function(){
        $("#section2 p").slideUp();
    });
    $("#slideDown").click(function(){
        $("#section2 p").slideDown();
    });
    $("#slideToggle").click(function(){
        $("#section2 p").slideToggle();
    });
    $("#fadein").click(function(){
        $("#section3 img").fadeIn();
    });
    $("#fadeout").click(function(){
        $("#section3 img").fadeOut();
    });
    $("#setattr").click(function(){
        $("#section3 img").attr("width","300");
    });
    $("#addclass").click(function(){
        $("#section4 p").addClass("red");
    });
    $("#before").click(function(){
        $("#para").before("<p>Hello world!</p>");
    });
    $("#after").click(function(){
        $("#para").after("<p>Hello world!</p>");
    });
    $("#append").click(function(){
        $("#section6 p").append("<p>Hello world!</p>");
    });
    $("#html").click(function(){
        $("#section7 p").html("<ul><li>item1</li><li>item1</li></ul>");
    });
    $("#value").click(function(){
        $("#section8 input").val("lastname");
    });
    $("#text").click(function(){
        $("#section8 p").text("A new paragraph");
    });
});