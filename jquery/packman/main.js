$(function () {
    var initscore = 0, finalscore = 0;
    var map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var position = {
        "x": 1,
        "y": 1
    };
    function drawmap() {
        var result = "";
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] == 0) {
                    result += "<div class='wall'></div>";
                }
                if (map[i][j] == 1) {
                    result += "<div class='ground'></div>";
                }
                if (map[i][j] == 2) {
                    result += "<div class='packman'></div>";
                }
                if (map[i][j] == 3) {
                    result += "<div class='init'></div>";
                }
            }
        }
        $("#wrapper").html(result);
    }

    function countScore() {
        var score = 0;
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] == 1) {
                    score++;
                }
            }
        }
        return score;
    }
    countScore();
    initscore = countScore();
    //console.log(initscore);
    drawmap();

    $(document).on("keydown", function (e) {

        if (e.which == 39) {           //keyright

            map[position.x][position.y] = 3;
            position.y++;
            if (map[position.x][position.y] == 0) {
                position.y--;
            }

        }

        if (e.which == 40) {     //keydown
            map[position.x][position.y] = 3;
            position.x++;
            if (map[position.x][position.y] == 0) {
                position.x--;
            }

        }

        if (e.which == 38) {      //keyup
            map[position.x][position.y] = 3;
            position.x--;
            if (map[position.x][position.y] == 0) {
                position.x++;
            }

        }

        if (e.which == 37) {      //keyleft
            map[position.x][position.y] = 3;
            position.y--;
            if (map[position.x][position.y] == 0) {
                position.y++;
            }
        }
        map[position.x][position.y] = 2;
        drawmap();
        countScore();
        finalscore = initscore - countScore();
        $("h3").html('score:' + finalscore);
        // if((countScore())==0){
        //     setTimeout(function(){
        //         alert("123",10000);
        //     });
        // }
        
    });
   
});


