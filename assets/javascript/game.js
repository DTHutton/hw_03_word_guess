//word bank array with programming languages
const wordBank = ['JavaScript', 'Python', 'Lua', 'Java', 'Perl', 'Swift', 'Ruby']

let randWordGen = wordBank[Math.floor(Math.random() * wordBank.length)];

let incLetters = document.getElementById('incLetters');

//onkeyup function that changes the text in the random word div
document.onkeyup = function(event) {
    incLetters.textContent = event.key;
};

function randWordGenFunc (){
    randWord.textContent = randWordGen;
}

randWordGenFunc();
