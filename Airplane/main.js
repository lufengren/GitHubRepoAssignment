var missiles = [];
var missilesele = document.getElementById("missiles");

function drawPlayer() {
    var player = document.getElementById("player");
    var creplayer = document.createElement("img");
    creplayer.setAttribute("src", "img/player.png");
    player.appendChild(creplayer);
}

function drawEnemies() {
    var enemies = document.getElementById("enemies");
    for (var i = 0; i < 4; i++) {
        var creenemy = document.createElement("img");
        creenemy.setAttribute("src", "img/enemy.png");
        enemies.appendChild(creenemy);
    }
}


function drawMissiles(){
    for(var i=0;i<missiles.length;i++){
        var missile = document.createElement("div");
        missile.setAttribute("class","missiles");
        missile.style.left = missiles[i].left+"px";
        missile.style.top = missiles[i].top+"px";
        missilesele.appendChild(missile);
        
    }
}

function movePlayer(){
    var playerleft = player.offsetLeft;
    var playertop = player.offsetTop;
    document.onkeydown = function (e) {
       
        if (e.keyCode == 37) {           //left
            playerleft = playerleft - 5;
            player.style.left = playerleft + "px";
        } else if (e.keyCode == 39) {     //right
            playerleft = playerleft + 5;
            player.style.left = playerleft + "px";
        } else if (e.keyCode == 38 && playertop > 500) {     //up
            playertop = playertop - 5;
            player.style.top = playertop + "px";
        } else if (e.keyCode == 40 && playertop < 620) {     //down
            playertop = playertop + 5;
            player.style.top = playertop + "px";
        }else if(e.keyCode == 32){
            missiles.push({left:(playerleft+33),top:(playertop-10)});
           //moveMissiles();
           drawMissiles();
        }
        }
    }

function moveEnemies(){
    enemies = document.getElementById("enemies");
    var enemiestop = enemies.offsetTop;
    enemiestop = enemiestop +5;
    enemies.style.top = enemiestop + "px";
}

function moveMissiles(){
    var missiles = document.getElementsByClassName("missiles");
    for(var i=0;i<missiles.length;i++){
       var missiletop = missiles[i].offsetTop
        missiletop = missiletop -10;
       missiles[i].style.top = missiletop + "px"; 
    }
}

function startGame() {
    drawPlayer();
    drawEnemies();
    moveEnemies();
    setInterval(moveEnemies,600);
    movePlayer();
    moveMissiles();
    setInterval(moveMissiles,600);
}
startGame();



//window.onload = playgame;