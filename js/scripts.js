//Business Logic
var userArray = [];
var outputArray = [];

function checkForm(form) {
    form.myButton.disabled = true;
    form.myButton.value = "Beep Boop"
    return true;
};

function resetForm(form) {
    form.myButton.disabled = false;
    form.myButton.value = "Calculate!";
};

var beepBoop = function(userNumber) {

    //Empties the Array, allows the user to run the script multiple times
    outputArrayLength = outputArray.length;
    if (outputArrayLength >0) {
        outputArray = [];
    }

    //Puts numbers ranging from 0 to userNumber(User's Input) into userArray as a string
    for (x = 0; x <= userNumber; x++) {
        x = x.toString();
        userArray.push(x);
    };
    //------------------------------------------------------------------------------------------------------------------
    //Main script
    userArray.forEach(function(num){
        //Regular Expressions search for either 0 or 1 within the array.
        var numZero = num.search(/0/gm);
        var numOne = num.search(/1/gm);
        //debugger; (Debugger used to test regular expression filters)
        
        //Script checks to first see if the value is divisible by 3 with no remainders and is NOT equal to ZERO. In this case, it outputs the desired text.
        if ((num%3) === 0 && num!=0) {
            switch (num) {
                default:
                    num = "No."
                    break;
            }
        //Script searches the string for any case of zero and above, if it finds a ONE in any position in the string, it outputs a Boop!
        } else if (numOne >= 0) {
            switch(numOne) {
                default:
                    num = "Boop!";
                    break;
            }
        //Script searches the string for any case of zero and above, if it finds a ZERO in any position in the string, it outputs a Beep!
        } else if (numZero >= 0) {
            switch(numZero) {
                default:
                    num = "Beep!";
                    break;
            }       
        }
        //Outputs the newly modified string ("Beep!", "Boop!", or the desired text in the first statement.)
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