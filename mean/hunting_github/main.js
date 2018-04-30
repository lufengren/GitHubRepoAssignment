$(function(){
    $("button").click(function(){
        $.get("https://api.github.com/users/lufengren", displayName);
    });
});
function displayName(data) {
    console.log(data);
  }