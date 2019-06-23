## layout basic html
    word guess header
    instructions - 'press the any letter key to get started'
    win/loss counter
    current word - with '_ _ _ _' as the default format
    number of guesses remaining
        guess counter
    letters already guessed
        div that will contain those letters

## set up an onkeyup event that registers user input for letter keys
    console.log first
    then set it up so it puts it in the html

## make an array of words that to use for a word bank
    write a function that can randomly pull from the array
    it will link to the current word section

## underscore function
    write function that sets the '_ _ _' format to be equal to the number of letters in the randomly generated words

## correct letter guessed function
    write function that replaces the '_ _ _ _' as each correct letter is guessed

## incorrect letter guessed function
    write function that puts the incorrect letters into the letters already guessed div

## guessed remaining function
    write function that decrements the guesses remaining counter

## win/loss alert
    write function that displays win/lose based on result

## win loss counter
    write function that handles the win loss counter

## reset button
    write function that resets the game (except the win/loss counter) when confirming the win/lose display

## make it fancy
    css