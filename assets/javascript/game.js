//word bank array with programming languages
const wordBank = ['JavaScript', 'Python', 'Lua', 'Java', 'Perl', 'Swift', 'Ruby']

let randWordGen = wordBank[Math.floor(Math.random() * wordBank.length)];

let randWord = document.getElementById('randWord');

//onkeyup function that changes the text in the random word div
document.onkeyup = function(event) {
    randWord.textContent = event.key;
};

