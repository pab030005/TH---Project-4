/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
 * Creates phrases for use in game
 * @return {array} An array of phrases that could be used in the game */

 class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  };

  /**
   * Display phrase on game board
   */

 addPhraseToDisplay() {
    let newDiv = document.querySelector("#phrase").firstElementChild
    let prsArray = []
    prsArray = this.phrase.split('')  //splits the Phrase class phrase into array of letters and spaces
    for (let i=0; i<this.phrase.length; i++) {
        let newLi = document.createElement("LI")//creates new li for each lrttrt in array
        newLi.textContent = prsArray[i]  //assigns content of each li as letter in array
        if (newLi.textContent === " ") {//if a space, assign 'space' class
          newLi.className = "space"
        } else  //otherwise assign hide ltter class for esch letter
          {newLi.className = "hide letter " + prsArray[i]}
        newDiv.appendChild(newLi)  //appends li 

      }
};

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */

checkLetter(letter) {
  return this.phrase.includes(letter)

}

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */

showMatchedLetter(letter) {
    let matchedLetters = document.querySelectorAll(".hide.letter."+letter)
    for (let i=0; i<matchedLetters.length; i++)   {
    matchedLetters[i].className = "show letter " +letter
    }
  }

}
