$("document").ready(function(){

    $("#comparisons").click(function(){

            output("#input1" , "#input2");
    
    
    })

    $("#conditional").click(function(){

            output("#input1" , "#input2");

    })
});

var input = function(a){

    var userInput = $(a).val();

    return userInput;

}


var compare = function(a,b){

    return input(a) == input(b);

}


var output = function (a, b){

    $("#output").text(conditional(input(a), input(b)));

}

//When checking for equality there are TWO options. == or ===. Keep in mind that ' = ' is reserved to assigningvalues to variables. ' == ' is a LOOSE equality. Dara types are not respected. Which means, a string 1 and the number 1 are equal. ' === ' is a strict equality which maintains datatypes.

//A conditional is an if/then statement based on a boolean expression.

var conditional = function(a, b){

    if(a > b)
        return "A is bigger";

}