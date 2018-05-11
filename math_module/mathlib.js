module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here
           sum = num1 + num2; 
           console.log("The sum is: " + sum);
      },
      multiply: function(num1, num2) {
           // add code here 
           console.log("After multiplying: ", num1 * num2);
      },
      square: function(num) {
           // add code here 
           console.log("Sqaure root: ", num * num);
      },
      random: function(num1, num2) {
           // add code here
           // randomy = Math.floor(Math.random() * (num1 - num2)) + num2;
           var span = num2 - num1;
           var answer = Math.floor(Math.random() * span) + num1;
           console.log("Random number is: " + answer);
      }
    }
  };
  