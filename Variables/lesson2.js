/**THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */

$(documnent).ready(function(){

    $("#add").click(function(){
        add();
    });
    $("#divide").click(function(){
        divide();
    });
    $("#modulo").click(function(){
        modulus();
});



/*var wrong = function(){

    var x = $("#number 1").val();
    var y = $("#number 2").val();

    var sum = x  + y;
    var message = x + " + " + y + " = " + sum;

    $("#output").text(message + "  All information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.");
}*/

var add = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();
    
    x = parseInt(x);
    y = parseInt(y);
    
    var sum = x  + y;
    var message = x + " + " + y + " = " + sum;

    $("#output").text(message + "  All information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.");

}

var divide = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();
    
    /*x = parseInt(x);
    y = parseInt(y);*/

    var quotient = x / y;
    $('#output').text(quotient);
}

var modulus = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();

    var modulus = x % y;
    $('#output').text(modulus);
}
var time = function(){
    //xwill be converting from Days to hours/mins/seconds
    //y will be converting from seconds to days
}