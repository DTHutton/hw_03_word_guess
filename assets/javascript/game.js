//word bank array with programming languages
const wordBank = ['javascript', 'python', 'lua', 'java', 'perl', 'swift', 'ruby', 'php', 'rust'];

//picks a random word from the word bank array
let randNum = Math.floor(Math.random() * wordBank.length);
let word = wordBank[randNum];

//variables
let underScore = [];
let correctLetter = [];
let incorrectLetter = [];
let wins = 0;

//dom
let liveWord = document.getElementById('randWord');
let winCount = document.getElementsByClassName('winCount');
let lossCount = document.getElementsByClassName('lossCount');
let incLetters = document.getElementById('incLetters');

//code check
console.log(word);

// that generates underscores to match the number of letters in the chosen word
let generateUnderScore = () => {
    for (let i = 0; i < word.length; i++) {
        underScore.push('_');
    }
    return underScore;

}

let applyIncorrectLetters = () => {
    incorrectLetter.push('');
    return incorrectLetter;
}
//applies underscores to current word.
generateUnderScore();
liveWord.textContent = underScore.join(' ');


//log user's guess without for loop
document.onkeyup = () => {
    let letterCode = String.fromCharCode(event.keyCode);
    //ran into issues with this function returning the boolean accurately when it came to different case letters. so that's why this is here. 
    let letter = letterCode.toLowerCase();
    //user guess correct
    if (word.indexOf(letter) > -1) {
        // add to correct letter array
        correctLetter.push(letter);
        //change underscore to correct letter
        //I can't get this to work right on the words that have letters that repeat. it only counts the first instance of the letter.
        underScore[word.indexOf(letter)] = letter;
        liveWord.textContent = underScore.join(' ');
        console.log(underScore.join(''));
        //confirms if word matches user guesses
        if (underScore.join('') == word) {
            alert('win');
            //alert works but I can't get the win counter to do anything
            wins++;
            winCount = 'wins: ' + wins;
        }

    }
    else {
        //add to incorrect letter array
        incorrectLetter.push(letter);
        console.log(incorrectLetter);
        incLetters.textContent = incorrectLetter;

        //this should have a loss counter 
    }

    //number of guesses left.
    //function that decreases the amount of attempts you have left everytime you select an incorrect letter

    //the only other thing was to add some css so it doesn't look like garbage. had to actually get it to not run like garbage first though, but that didn't happen. 

}

