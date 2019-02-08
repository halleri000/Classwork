$("#document").ready(function(){

    updateNarrative(N1);
    $('footer').html(createButton("option1", O1) + createButton("option2", O2) );

    $("#option").click(function(){
        updateNarrative(N2);
        $('footer').html(createButton("option3", O1) + createButton("option4", O2) + createButton("option5", O5) );
    })


});

var N1 = "Once a upoin a time in the wild wild west there live a ...";
var N2 = "This ranger was the most dangerous gun slinger known to man. He loved to ..."
var O1 = "ranger."
var O2 = "robot."
var O3 = "kill robots."
var O4 = "cook pancakes."
var o5 = "arrest bad robots."

var updateNarrarive = function(a){

    $('article').text(a)

}


var createButton = function(id, text){

    return " <button type=button id=" + id + ">" + text + "</button>";

}
