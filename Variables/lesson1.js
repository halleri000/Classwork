/*
SCOPE

GLOBAL VARIABLES - the variable can be used through out the entire document/script

LOCAL VARIABLES - the variable can only be used in the sectrion it was defined


*/

//ACTIVE
/*$(document).ready(function(){

    getInfo();
    showInfo();


});*/

//DEFINITIONS
var userName;


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello" +  userName + ", glad to meet you!";

    $("#output").text(message);
}