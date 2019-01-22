/**THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */

$(documnent).ready(function(){

    $("mathWrong").click(function(){
        wrong();
    });

});



var wrong = function(){

    var x = $("#number 1").val();
    var y = $("#number 2").val();

    var sum = x  + y;
    var message = x + " + " + y + " = " + sum;

    $("#output").text(message + "  All information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.");
}

var right = function(){

    var x = $("#number 1").val();
    var y = $("#number 2").val();
    
    x = parseInt(x);
    y = parseInt(y);
    
    var sum = x  + y;
    var message = x + " + " + y + " = " + sum;

    $("#output").text(message + "  All information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.");

}