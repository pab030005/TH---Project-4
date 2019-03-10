/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//declare the Game class
 class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = 'null'
  };

//creates & returns 4 phrases into Phrase objects
  createPhrase() {
		const gamePhrases = [];
	   gamePhrases.push(new Phrase('phrase one'));
		gamePhrases.push(new Phrase('phrase two'));
		gamePhrases.push(new Phrase('phrase three'));
		gamePhrases.push(new Phrase('phrase four'));
		return gamePhrases;
	};

  /**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */

  getRandomPhrase() {
    const ranNum = Math.floor(Math.random() * this.phrases.length);
    const ranPhrs = this.phrases[ranNum];
    return ranPhrs;
  };

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
  document.querySelector("#overlay").style.display = "none";
  this.activePhrase = this.getRandomPhrase();
  this.activePhrase.addPhraseToDisplay();

};

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */

  checkForWin() {
    const remainLetters = document.querySelectorAll(".hide")
    if (remainLetters.length === 0) {
      return true
      }
      else { return false
      }
    }

    /**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */

  removeLife() {
    let tries = document.querySelectorAll("img[src='images/liveHeart.png']");
    tries[0].src = "images/lostHeart.png"
    this.missed +=1;
      if (this.missed === 5) {
        this.gameOver();
      }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(gameWon) {
    const ovrly = document.querySelector("#overlay")
    ovrly.style.display = "block";  //returns to start page & hides keys/phrase
    if (gameWon) {  //selects winning or lising message and color scheme
      document.querySelector("#game-over-message").textContent = "Congrats, you've won!";
      ovrly.className = "win"}
      else {  document.querySelector("#game-over-message").textContent = "Better luck next time";
      ovrly.className = "lose"

      }
    }

    //habdles key button selections, disabled chosen keys,
    handleInteraction(button) {
      if (this.activePhrase.checkLetter(button.textContent) === true) { //if chose key is in phrase
        this.activePhrase.showMatchedLetter(button.textContent);//shows matched letter
        button.disabled = true;//disables button
        button.className = "chosen";//changes color to chosen class
        if (this.checkForWin() === true){//checks for win
          this.gameOver(true);  //if win, gameOver called with win outcome
        }

      }
      else {//otherwise, key disabled, key chnaged to wrong class, removeLife
        button.disabled = true;
        button.className = "wrong";
        this.removeLife();

      }

    }
    resetGame() {//resets game
      const phraseDisplay = document.querySelector("#phrase").firstElementChild;
      while (phraseDisplay.firstChild) {
      phraseDisplay.removeChild(phraseDisplay.firstChild) //removes all li's created by addPhraseToDisplay
    }
      this.missed = 0;  //resets missed to 0
        //VV resets key color classes & ensbles keys
      const chosen = document.querySelectorAll(".chosen")
      const wrong = document.querySelectorAll(".wrong")
      chosen.forEach(letter => {
        letter.className = "key";
        letter.disabled = false;
      })
      wrong.forEach(letter => {
        letter.className = "key";
          letter.disabled = false;
      })
        //VV resets life images
      let tries = document.querySelectorAll("img[src='images/lostHeart.png']");
      tries.forEach(src => {
        src.src = "images/liveHeart.png"
      })

    }

  }
