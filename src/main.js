var game;

var playerOneDeck = document.querySelector('.player-one-deck');
var playerTwoDeck = document.querySelector('.player-two-deck');
var centerDeck = document.querySelector('.center-deck');
var gameMessage = document.querySelector('.game-update');



function displayCenterPile() {
  resetCenterPile();
  var topCard = `<img src="./assets/blue-01.png" alt="Current Played Card" class="current-card cards">`;
  centerDeck.insertAdjacentHTML('afterbegin', topCard);
}

function resetCenterPile() {
  centerDeck.innerHTML = '';
}
