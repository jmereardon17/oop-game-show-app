/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = ['JavaScript', 'HTML', 'CSS', 'React', 'Loops', 'Framework', 'Conditional Statements'];
const game = new Game();
const startScreen = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const phraseUL = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

startButton.addEventListener('click', () => game.startGame());
keys.forEach(key => key.addEventListener('click', e => game.handleInteraction(e.target.textContent)));
document.addEventListener('keydown', e => e.key !== ' ' && startScreen.style.display === 'none' && game.handleInteraction(e.key));