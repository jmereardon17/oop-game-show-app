/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay = () => {
    Array.from(this.phrase)
      .forEach(char => phraseUL.innerHTML += `<li class=${char !== ' ' ? 'letter' : 'space'}>${char}</li>`);

    this.letters = document.querySelectorAll('.letter');
    this.letters.forEach(letter => window.setTimeout(() => letter.style.opacity = '1')); // add small fade in for phrase
  }

  checkLetter = key => {
    let match = false;
    this.letters.forEach(letter => key === letter.textContent ? match = true : null);

    return match;
  }

  showMatchedLetter = key => {
    this.letters.forEach(letter => key === letter.textContent && letter.classList.add('show'));
  }

  removePhraseFromDisplay = () => {
    const phraseUL = document.querySelector('#phrase ul');
    phraseUL.querySelectorAll('li').forEach(li => phraseUL.removeChild(li));
  }
}