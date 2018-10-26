//8:00am-10:30am -- Main Project Objectives Completed
//----From Most Important to Least Important----
//      ~Numbers divisible by 3 are replaced with "Custom Text"
//      ~Numbers that contain a 1 are replaced (all digits) with "Boop!"
//      ~Numbers that contain a 0 are replaced (all digits) with "Beep!"
//----------------------------------------------
//      ~User is able to use the reset button to refresh the form for more input.
//Business Logic
var userArray = [];
var outputArray = [];

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
    //Submit button within the form that when clicked, performs the function beepBoop.
    $("#submitButton").click(function(event) {
        event.preventDefault();
        var userNumber = parseInt($("input#userInput").val());
        beepBoop(userNumber);
        $("#userOutput").text(outputArray);

    });
    //JQuery event that clears the form and resets it, so that the user may then input another number without issues.
    $("button#resetButton").click(function() {
        $("#userOutput").text("");
    });
  });