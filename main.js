//Get the HTML element
let $word = document.getElementById("word");

//Store word list
let wordList = [
    'Hello World',
    'Hi Siri',
    'OK Google',
    'Good morning',
    'This is my demo',
];

let checkSpell = [];
//Separate by each letter to check it by each letter
checkSpell = wordList[ 0 ].split('');

//Display a word to type
$word.textContent = wordList[ 0 ];

//Once a key is pressed, perform the function
document.addEventListener( 'keydown', keyDown );
function keyDown ( e ) {
    if ( e.key === checkSpell[0] ) {
        console.log('correct!!');
    }
}