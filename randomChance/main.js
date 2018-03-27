function playSlots(initquarters,targetquarters){
    while(initquarters>0){
        if(initquarters==targetquarters){
          console.log("you win and exit!");
          return;
        }
      initquarters--;
      var chance = Math.floor(Math.random()*100);
      if(chance == 3){
        var winquarters = Math.floor(Math.random()*51+50);
        initquarters += winquarters;
        console.log("you total quarters is "+initquarters);
      }
    }
    return 0;
    //console.log("0");
  }
  playSlots(10);




  