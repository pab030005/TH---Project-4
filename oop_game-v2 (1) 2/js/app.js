/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare global variable:
let game;

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
 document.querySelector("#btn__reset").addEventListener (
   "click", function () {

        game = new Game();
        game.resetGame();
        game.startGame();
    })

//listens for qwerty button clicks only, then calls handleInteraction on the button
document.querySelector("#qwerty").addEventListener("click", function (e) {
if (e.target.textContent.length === 1){
  game.handleInteraction(e.target)}
})
