var hasBow = false;
var hasPhaser = false;


$(document).ready(function(){

    
    
    var button1 = createButton('option3', O3);
    var button2 = createButton('option4', O4);
    var button3 = createButton('option5', O5);
    var button4 = createButton('option6', O6);
    var button5 = createButton('option7', O7);
    var button6 = createButton('option8', O81);
    var button7 = createButton('option8', O82);
    
    updateNarrative(N1);
    $('footer').html(createButton("option1", O1) + createButton("option2", O2) );

    $("#option1").click(function(){
        updateNarrative(N2);
        $('footer').html(button1 + button2 + button3);
        hasBow = true;
    })

    $("#option2").click(function(){
        updateNarrative(N3)
        $('footer').html(createButton(button4 + button5));
        hasPhaser = true;
    })


    $("#option3").click(function(){
        var roleButton;
        if(hasBow){
            roleButton = createButton(button6);
        }
        else
            roleButton = createButton(button7);
       //updateNarrative(N5);
        //$('footer').html(roleButton);
    })

    $("#option6").click(function(){
        updateNarrative(N6);
        $('footer').html(roleButton);
    })



});

var N1 = "Once a upoin a time in the wild wild west there live a ...";
var N2 = "This ranger was the most dangerous archer known to man. He loved to ..."
var N3 = "This robot had killer instincts. Purge the wild west of all evil-doers. Armed with a phaser he..."
var N5 = "The ranger approaches the insidious Mr. Pig. He raises his bow and ... "
var N6 = "The robot approaches the insidious Mr. Pig. He raises his phaser and ..."
var O1 = "ranger."
var O2 = "robot."
var O3 = "chase tumbleweeds."
var O4 = "cook pancakes."
var O5 = "arrest bad robots."
var O6 = "heats his pork and beans."
var O7 = "purges the wild west of all evil-doers."
var O81 = "shoots the arrow through Mr.Pig."
var O82 = "fires, vaporizing Mr. Pig."

var updateNarrative = function(a){

    $('article').text(a)

}


var createButton = function(id, text){

    return " <button type=button id=" + id + ">" + text + "</button>";

}
