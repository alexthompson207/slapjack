var game;

var playerOneDeck = document.querySelector('.player-one-deck');
var playerTwoDeck = document.querySelector('.player-two-deck');
var centerDeck = document.querySelector('.center-deck');
var gameMessage = document.querySelector('.game-update');

window.addEventListener('load', startNewGame);
// window.addEventListener('keydown', handlePlayerEvents)
//keys player1 deal: q
//keys player1 deal: p
//handle keys if event type = f or j do handleSlap

//slap f and j
//handleSlap

function startNewGame() {
  currentGame = new Game();
  currentGame.dealDeck();
  resetCenterPile();
}

function handleSlap() {
if (topCard.number === 11 || topCard.number === secondCard.number || topCard.number === thirdCard.number) {
  this[player].hand = this[player].hand.concat(this.centerPile);
  this.centerPile = [];
  this.shuffleCards(this[player].hand); //gameinstance.legalSlap()
}
}

function displayCenterPile() {
  resetCenterPile();
  var topCard = `<img src=${currentGame.centerPile[0].src} alt="Current Played Card" class="current-card cards">`;
  centerDeck.insertAdjacentHTML('afterbegin', topCard);
}

function resetCenterPile() {
  centerDeck.innerHTML = '';
}
