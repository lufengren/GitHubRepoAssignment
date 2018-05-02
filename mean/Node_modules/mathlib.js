module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log(num1+num2);
      },
      multiply: function(num1, num2) {
           console.log(num1*num2);
      },
      square: function(num) {
           console.log(num*num);
      },
      random: function(num1, num2) {
           var result=Math.floor(Math.random()*(num2-num1+1))+num1;
           console.log(result);
      }
    };
  };
  