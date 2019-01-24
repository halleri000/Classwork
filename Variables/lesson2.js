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
    })

    $('#time').click(function(){
        time();
    });

    $('#sumDigits').click(function(){
        sumDigits();
    });

    $('#pow').click(function(){
        pow();

    $('#abs').click(function(){
        abs();
    });

     $('#sqrt').click(function(){
        sqrt();
    });

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

    //Math.round() - rounds normally >.5 goes up
    //Math.floor() - rounds down to the nearest integer
    //Math.cell() - rounds up to the nearest integer

    var secondsRemaining;
    var minutesRemaining;
    var hoursRemaining;
    var days;
    var minutes;
    var hours;

    var input = $('#number2').val();

    secondsRemaining= input%60;
    minutes = Math.floor(input/60);
    minutesRemaining = minutes%60;
    hours = Math.floor(minutes/60);
    hoursRemaining = hour%60;
    days = Math.floor(hours/24);

$("#output").text(input + " seconds is equal to " + days + " days, " + hoursRemaining + " hours, " + minutesRemaining + " minutes, " + secondsRemaining + " seconds.");
}

var sumDigits = function(){

    //512    5   1   2
    var input = $("#number3").val();

    var digit1 = input%10;
    var digit2 = (Math.floor(input/10))%10;
    var digit3 = (Math.floor(input/100))%10;

    var sum = digit1 + digit2 +digit3;

    $("#output2").text("The sum of the digits is " + sum);

}

var pow = function(){

    //Math.pow(a,b) - raises a to the b power
    // Math.abs() - returns the absolute value of a 
    // Math.sqrt() - returns the square root of a
    //INCREMENT AND DECREEMENT

    var x = $("#number4").val();
    var y = $("#number5").val();

    var pow = Math.pow(x,y);
    $("#output3").text("The power is" + pow);
}

var abs = function(){

    var x = $("#number4").val();
    var y = $("#number5").val();

    var abs = Math.abs(x);

    $("#output3").text("the absolute value is " + abs);
}

var sqrt = function(){

    var x = $("#number4").val();
    var y = $("#number5").val();

    var sqrt = Math.sqrt(x);

    $("#output3").text("the square root is " + sqrt);
}