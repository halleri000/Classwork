/*
SCOPE

GLOBAL VARIABLES - the variable can be used through out the entire document/script

LOCAL VARIABLES - the variable can only be used in the sectrion it was defined


*/

//ACTIVE

//***********NOT NEEDED FOR HTML TRIGGERING****** */
$(document).ready(function(){

    $("#button").click(function(){

        showInfo();

    })

});
//******************************************* */

//DEFINITIONS
var userName;


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello" +  userName + ", glad to meet you!";

    $('#ouput').text(messsage);
    $("#output").text(message).show().animate({'top':'0px',"opacity":'1'},'slow');
}