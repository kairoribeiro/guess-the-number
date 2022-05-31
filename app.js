
//Tried to understand many times but failed


const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    },
    getGuess: function() {
    while (this.playerChoice !== this.secretNum) {
    var playerChoice = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `);
    var wholeNumber = parseInt(this.playerChoice);
    if (this.wholeNumber > this.biggestNum) {
    var wholeNumber = 100;
    } 
    if (this.wholeNumber < this.smallestNum) {
    var wholeNumber = 1;
    }
    if (typeof this.wholeNumber !== "number") {
    var wholeNumber = Math.floor(Math.random() * 100)
    }
    } 
    },
    }
    
    console.log(getGuess)
    
    
    
    
    
    
    
    
    
    
    
    
    // // for (i = 0; i < biggestNum; i++) {
    // // if (secretNum == getGuess) {
    // // prompt('You guees correctly');
    // // } else {
    // // play = prompt('Try again')
    // // // }
    // // }
    
    // // console.log(game)
    
    
    
    // function guessNumber (){
    // const random = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    // let number = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    
    // while (number !== random) {
    // number = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    // }
    
    // if (number == random) {
    // console.log('You guessed the correct number.');
    // }
    // }
    // console.log(guessNumber)
    
    
    
    
    
    
    
    // const game = {
    // title: 'Guess the Number!',
    // biggestNum: 100,
    // smallestNum: 1,
    // playerChoice: null,
    // secretNum: null,
    // //1. Add a prevGuesses property to the game object initialized to an empty array.
    // prevGuesses: [],
    // //2. Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]: Hint- Use a template literal for the prompt message.
    
    // //3. Ensure that the getGuess method returns a value that is:
    // //-is a number, not a string
    // // -is between smallestNum and biggestNum, inclusive
    // // -Hints: This is a great use case for a while loop. parseInt returns NaN if the string cannot be parsed into a number
    // getGuess: function() {
    // while (this.playerChoice !== this.secretNum) {
    // var playerChoice = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `);
    // var wholeNumber = parseInt(this.playerChoice);
    // if (this.wholeNumber > this.biggestNum) {
    // var wholeNumber = 100;
    // } 
    // if (this.wholeNumber < this.smallestNum) {
    // var wholeNumber = 1;
    // }
    // if (typeof this.wholeNumber !== "number") {
    // var wholeNumber = Math.floor(Math.random() * 100)
    // }
    // } 
    // },
    // //4. From within the play method, invoke the getGuess method and add the new guess to the prevGuesses array
    // play: function() {
    // this.secretNum = Math.floor(Math.random() * 
    // (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    // game.getGuess();
    // this.prevGuesses.push(this.wholeNumber);
    // //6 the play method should end(return) when the guess matches the secretNum
    // if (typeof(this.wholeNumber) === "number" && this.wholeNumber !== this.secretNum) {
    // game.render();
    // }
    // },
    // // 5. Add a render method to game that play will call after a guess has been made that alerts:
    // // -if the secret has been guessed: "Congrats! you guessed the number in [x] guesses!"
    
    // // otherwise
    
    // // -"Your guess is too [high|low]"
    // // "Previous guesses: x, x, x, x"
    
    // // Hints: render wont be able to access any of play's local variables, e.g., guess, so be sure to pass render any arguments as needed. Template literals not only have interpolation, they honor whitespace - including line breaks! The list of previous guesses can be generated using the array join method.
    // render: function() {
    // if (this.wholeNumber === secretNum) {
    // alert(`Congrats! You guessed the number in ${game.prevGuesses.length} guesses!
    // Previous guesses: ${prevGuesses}`);
    // } else if (this.wholeNumber > this.secretNum) {
    // alert(`Your guess is too high!
    // Previous guesses: ${this.prevGuesses}`);
    // game.guess();
    // } else if (this.wholeNumber < this.secretNum) {
    // alert(`Your guess is too low!
    // Previous guesses: ${this.prevGuesses}`);
    // game.guess();
    // }
    // }
    // };
    
    // game.play();
    // /*
    // Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly
    // If the player has an incorrect guess, display an alert message that informs the player:
    
    // Whether their guess is too high, or too low, and...
    // A list of all the previously guessed numbers (without showing the square brackets of an array)
    // If the player has guessed the secret number:
    
    // Display an alert message that congrats the player and informs them of how many guesses they took
    // End the game play*/
    
    // /*
    
    // Bonus: when play is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set*/