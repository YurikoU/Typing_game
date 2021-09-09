//Get the HTML element
let wordElement = document.getElementById("word");

//Store word list
let wordList = [
    'Hello World',
    'Hi Siri',
    'OK Google',
    'Good morning',
    'This is my demo',
];

//Empty array to store <span> elements for all letters of each word
let checkSpell = [];

createText();

//Store all <span> elements with each letter of a word
function createText () {
    //Random integer within the number of the array elements
    let randomInt = Math.floor( Math.random() * wordList.length );

    //Clear the previous word for the next word
    wordElement.textContent = "";

    //Separate by each letter to check it by each letter
    checkSpell = wordList[ randomInt ].split('').map( function( value ) {
        let spanElement = document.createElement('span');
        //Each letter is stored into each <san>, which is newly created
        spanElement.textContent = value;
        wordElement.appendChild( spanElement );
        return spanElement;
    } );
}

//Once a key is pressed, perform the function
document.addEventListener( 'keydown', keyDown );

function keyDown ( e ) {
    //If the entered key is correct
    if ( e.key == checkSpell[0].textContent ) {
        //Add class name to all <span> elements
        checkSpell[ 0 ].className = 'add-blue';
        //Erase the correct element from the array
        checkSpell.shift();

        //Once the spell check is done for all letters
        if ( !checkSpell.length ) {
            createText();
        }
    }
}