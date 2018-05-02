$(function(){
    $.get("https://opentdb.com/api.php?amount=3&category=10",function(res){
        var resultarr=res.results;
        console.log(resultarr);
       
        for(var i=0;i<resultarr.length;i++){
            var score=0;
            if(resultarr[i].difficulty=="hard"){
                score=300;
            }
            else if(resultarr[i].difficulty=="medium"){
                score=200;
            }
            else if(resultarr[i].difficulty=="easy"){
                score=100;
            }
            var newdiv="<div id='"+i+"'class='test'><p>"+score+"</p></div>";
            $(".container").append(newdiv); 
        }
        // $(".container").on("click",".test",function(){
            $(".test").click(function(){
            var i=$(this).attr("id");
            console.log(i);
            var result="<p>"+resultarr[i].question+"</p>";
            $("#"+i).html(result);
            var answer=resultarr[i].correct_answer;
            var answers="<p><input type='radio' name='answer' value='"+answer+"'>"+answer+"</p>";
            var answerarr=resultarr[i].incorrect_answers;
            for(var j=0;j<answerarr.length;j++){
                answers+="<p><input type='radio' name='answer' value='"+answerarr[j]+"'>"+answerarr[j]+"</p>";
            }
            $("#"+i).append(answers);
            });
        
    });
});