var leftvalue = 52;
var topvalue = 52;
var flag = 1;        //the value outside of the function dosen't impact the same name value inside the function
function update (){
    document.getElementById("charactor").style.left = leftvalue + "px";
    document.getElementById("charactor").style.top = topvalue + "px";
    
}
document.onkeydown = function (e){
    console.log(e);
    if(flag == 1){
        flag =2;
    }
    else if(flag==2){
        flag =1;
    }
    if(e.keyCode == 39 && leftvalue<100){ 
        
        document.getElementById("image").setAttribute("src","img/right"+flag+".png");
        leftvalue += 5;       //right
        
 
    }
    else if(e.keyCode == 40 && topvalue<100){    //down
        document.getElementById("image").setAttribute("src","img/down"+flag+".png");
        topvalue += 5;
        
        
    } 
    else if(e.keyCode == 38 && topvalue>0){    //up
        document.getElementById("image").setAttribute("src","img/top"+flag+".png");
        topvalue = topvalue-5;
        
       
        
    }
    else if(e.keyCode == 37 && leftvalue>0){    //left
        document.getElementById("image").setAttribute("src","img/left"+flag+".png");
        leftvalue = leftvalue - 5; 
        
        
        
    }
    update();
}