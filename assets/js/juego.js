/**
 * 2C = Two od Clubs
 * 2D = Two od Diaminds
 * 2H = Two od Hearts
 * 2S = Two od Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Esta funcion crea un nuevo deck
const crearDeck = ()=>{
    for(let i = 2 ; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//Esta funcion me permite tomar una carta

const pedircarta= ()=>{
    
}