/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const phrases = ['JavaScript', 'HTML', 'CSS', 'React', 'Loops', 'Framework', 'Conditional Statements'];
const startScreen = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const phraseUL = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

startButton.addEventListener('click', () => {
  game ? game.resetGame() : game = new Game(); // check if game already exists - reset game or create a new one
  game.startGame();
});

keys.forEach(key => key.addEventListener('click', e => game.handleInteraction(e.target.textContent)));
document.addEventListener('keydown', e => e.key !== ' ' && startScreen.style.display === 'none' && game.handleInteraction(e.key));