
function Card(rank, suit){

    this.rank = rank;
    this.suit = suit;

    this.toString = cardToString;
    this.image = cardImage; //handle images and graphics

}
function cardToString() {

    var rank, suit;

    /*if(rank == 'A'){
        rank = "Ace"

    }*/

    switch(this.rank){

        case 1: rank = "A"; break;
        case 2: rank = "2"; break;
        case 3: rank = "3"; break;
        case 4: rank = "4"; break;
        case 5: rank = "5"; break;
        case 6: rank = "6"; break;
        case 7: rank = "7"; break;
        case 8: rank = "8"; break;
        case 9: rank = "9"; break;
        case 10: rank = "10"; break;
        case 11: rank = "J"; break;
        case 12: rank = "Q"; break;
        case 13: rank = "K"; break;
        default: rank = null; break;
    }

    switch(this.suit){
        case 'C': suit = "Clubs"; break;
        case 'D': suit = "Diamonds"; break;
        case 'H': suit = "Hearts"; break;
        case 'S': suit = "Spades"; break;
        default: suit = null; break;
    }

    if(rank == null || suit == null){
        return "INVALID CARD. STOP "
    }

    return rank + " of " + suit;
}
function cardImage(){

    var img = document.createElement("IMG");
    img.src='cards/'+this.rank + this.suit + ".png";

    return img;
//document.getElementById(elementID).append(img);

}
var rank = parseInt((Math.random()*12)+1);
var suit = parseInt((Math.random()*3)+1);
var testCard = new Card(3,'D');
$("#hand").append(testCard.image("hand"));

function Deck() {

    this.cards = [];

    this.makeDeck = deckMakeDeck;
    this.shuffle = deckShuffle;
    this.deal = deckDeal;
    this.draw = deckDraw;
    this.addCard = deckAddCard;
    this.combine = deckStackDeck;
// this.cardCount = deckCardCount;
}

function deckMakeDeck(){

    var maxSuit = 4;
    var maxRank = 13;

    for(var suit = 1; suit <= maxSuit; suit++ ){
        for(var rank = 1; rank <= maxRank; rank++){
            this.cards.push(new Card(rank, suit));
        }
    }
}

function deckShuffle(){

    for(var i = 0; i < this.cards.length; i++){
        var tribute = parseInt(Math.random()*this.cards.length);
        var temp = this.cards[i];
        this.cards[i] = this.cards[tribute];
        this.cards[tribute] = temp;
    }
}

function deckDeal(){
    
    if(this.cards.length > 0){
       return this.cards.shift();
    }else
        return null;
}

function deckDraw(n){

    if(n >= 0 && n < this.cards.length){
        return this.cards.splice(n-1,1);
        
    }else
        return null;
}
function deckAddCard(card){
        this.cards.push(card);
}


function deckStackDeck(deck){
    for(var i = 0; i < deck.cards.length; i++){
        this.cards.push(deck.cards[i]);
    }
    deck.cards = [];

}

var deck = new Deck();
var hand = new Deck();

deck.makeDeck();
deck.shuffle();
alert(deck.cards);

for(var i = 0; i < 7; i++){
    hand.addCard(deck.deal());
}

alert(hand.cards);

deck.combine(hand);

alert(deck.cards);
alert(hand.cards);















