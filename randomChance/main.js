function playSlots(quartersQuantity){
    while(quartersQuantity>0){
      quartersQuantity--;
      var chance = Math.floor(Math.random()*101);
      if(chance == 3){
        var winquarters = Math.floor(Math.random()*51+50);
        quartersQuantity += winquarters;
        console.log("you total quarters is "+quartersQuantity);
      }
    }
    return 0;
    //console.log("0");
  }
  playSlots(10);