$(document).ready(function(){

output();

});

var numbers = ["something", "twothings", 5, 7.26];

//ADDS ELEMENTS TO THE END OF THE ARRAY
numbers.push("one", "two", "three");

//ADDS ELEMENTS TO THE BEGINNING OF THE ARRAY
numbers.unshift("four", "five", 6);

//Removes and adds elements at the specified place
numbers.splice(2, 1, "something else");
var removed = numbers.splice(2, 3);

//REMOVE ELEMENTS FROM THE BEGINNING
numbers.shift();

//REMOVE ELEMENTS FROM THE END
numbers.pop();

//ASSIGN VALUES TO THE ARRAY
numbers[2] = "Replacement"

var output = function(){
    $("#output").text("END ARRAY: " + numbers);
   /* $('#output').text("FIRST ELEMENT OF ARRAY: " + numbers[0]);
    $('#output').append(" \nREMOVED ELEMENTS: " + removed);*/
   
}

options = ['kills bad guy', 'eats pancakes']

options[0]