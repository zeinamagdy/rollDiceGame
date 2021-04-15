'use strict';
// Selecting elements
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Intial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
const rollDice = () => {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2.displat dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3.check for rolled 1:
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
};
rollDiceBtn.addEventListener('click', rollDice);
