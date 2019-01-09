/*
SCOPE

GLOBAL VARIABLES - the variable can be used through out the entire document/script

LOCAL VARIABLES - the variable can only be used in the sectrion it was defined


*/
$(document).ready(function(){
    getInfo();
    showInfo();
})


var userInput;


function getInfo(){
    userInput = "Hi";
    var userInputInput2 = "Hi Again";
}

function showInfo(){
    alert(userInput);
    alert(userInput2);
}