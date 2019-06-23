//word bank array with programming languages
const wordBank = ['javascript', 'python', 'lua', 'java', 'perl', 'swift', 'ruby', 'php', 'rust'];

//picks a random word from the word bank array
let randNum = Math.floor(Math.random() * wordBank.length);
let word = wordBank[randNum];

//variables
let underScore = [];
let correctLetter = [];
let incorrectLetter = [];

//dom
let liveWord = document.getElementById('randWord');


//code check
console.log(word);

// that generates underscores to match the number of letters in the chosen word
let generateUnderScore = () => {
    for (let i = 0; i < word.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
//code check
console.log(generateUnderScore());

//log user's guess without for loop
document.onkeyup = () => {
    let letterCode = String.fromCharCode(event.keyCode);
    let letter = letterCode.toLowerCase();
    //user guess correct
    if (word.indexOf(letter) > -1) {
        // add to correct letter array
        correctLetter.push(letter);
        //change underscore to correct letter
        underScore[word.indexOf(letter)] = letter;
        underScore.join('')
        console.log(underScore.join(''));
        //confirms if word matches user guesses
        if (underScore.join('') == word) {
            alert('you win');
        }
    }
    else {
        //add to incorrect letter array
        incorrectLetter.push(letter);
    }
}