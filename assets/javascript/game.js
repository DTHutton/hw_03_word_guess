//word bank array with programming languages
let wordBank = ['JavaScript', 'Python', 'Lua', 'Java', 'Perl', 'Swift', 'Ruby'];

// let letters =

//picks a random word from the word bank array
let word = wordBank[Math.floor(Math.random() * wordBank.length)];

//array that generates underscores to match the number of letters in the chosen word
let underscoreArray = [];
for (var i = 0; i < word.length; i++) {
    underscoreArray[i] = '_';
}
randWord.textContent = underscoreArray.join(' ');

document.onkeyup = function (event) {
    let letter = event.key;
    if (letter === word[i]) {
        console.log(true);
    } else {
        console.log(false);
    }
}