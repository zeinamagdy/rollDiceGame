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
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Intial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switching players functionality
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
const rollDice = () => {
  if (playing) {
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2.display dice
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
      switchPlayer();
    }
  }
};
// Holding score functionality
const finishGame = () => {
  playing = false;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
const hodlingScore = () => {
  if (playing) {
    //1.Add current score to active play's score
    scores[activePlayer] += currentScore;
    // 2.check if player's scire is >= 100
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Finsih the game
    if (scores[activePlayer] >= 20) {
      finishGame();
    } else {
      //Switch to next players
      switchPlayer();
    }
  }
};
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hodlingScore);
