/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.phrases = this.createPhrases(phrases);
    this.activePhrase = null;
    this.missed = 0;
    this.lives = document.querySelectorAll('.tries');
    this.gameOverMsg = document.getElementById('game-over-message');
    this.hasWon = false;
  }

  startGame = () => {
    startScreen.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  createPhrases = phrases => phrases.map(phrase => new Phrase(phrase));

  getRandomPhrase = () => this.phrases[Math.floor(Math.random() * this.phrases.length)];

  handleInteraction = key => {
    const isMatch = this.activePhrase.checkLetter(key);

    keys.forEach(btn => {
      if (btn.textContent === key && !btn.disabled) {
        btn.disabled = true;
        btn.classList.add('chosen');

        if (isMatch) {
          this.activePhrase.showMatchedLetter(key);
          this.hasWon = this.checkForWin();
          if (this.hasWon) this.gameOver(this.hasWon);
        } else {
          btn.classList.add('wrong');
          this.removeLife();
        }
      }
    });
  }

  removeLife = () => {
    this.lives[this.missed].style.display = 'none'; // use the counter to access the lives array and remove one life
    if (this.missed === 4) this.gameOver(this.hasWon); // end the game if the player has ran out of lives
    this.missed++; // increment missed counter by 1
  }

  checkForWin = () => Array.from(document.querySelectorAll('.letter')).every(letter => letter.classList.contains('show'));

  gameOver = hasWon => {
    if (hasWon) {
      this.gameOverMsg.textContent = 'Nice job! You guessed the phrase!';
    } else {
      this.gameOverMsg.textContent = 'Better luck next time!';
    }

    startScreen.classList.add(hasWon ? 'win' : 'lose');
    startButton.textContent = 'Play Again';
    window.setTimeout(() => startScreen.style.display = '', 800); // re-show the overlay after other animations finished
  }

  resetGame = () => {
    startScreen.classList.remove('win', 'lose');
    this.activePhrase.removePhraseFromDisplay();

    keys.forEach(key => {
      key.classList.remove('chosen', 'wrong');
      key.disabled = false;
    });
  
    this.lives.forEach(life => life.style.display = '');
    this.missed = 0;
    this.hasWon = false;
  }
}