//Business Logic
var userArray = [];
var outputArray = [];
var beepBoop = function(userNumber) {
    //Puts numbers ranging from 0 to userNumber(User's Input) into userArray
    for (x = 0; x <= userNumber; x++) {
        x = x.toString();
        userArray.push(x);
    };
    userArray.forEach(function(num){
        var numZero = num.search(/0/gm);
        var numOne
        debugger;
        if (numZero >= 0) {
            switch(numZero) {
                default:
                    num = "Beep!";
                    break;
            }       
        }
        outputArray.push(num);
        console.log(outputArray);
    });
};



//User Interface Logic
$(document).ready(function() {
    $("form#formInput").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#userInput").val());
      beepBoop(userNumber);
      $("#userOutput").text(outputArray);
    });
  });