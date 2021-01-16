var game;

var playerOneDeck = document.querySelector('.player-one-deck');
var playerTwoDeck = document.querySelector('.player-two-deck');
var centerDeck = document.querySelector('.center-deck');
var gameMessage = document.querySelector('.game-update');

window.addEventListener('load', startNewGame);
window.addEventListener('keydown', handlePlayerEvents)
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

// function handlePlayerEvents(event) {
//   if (event.key === 'q' || event.key === 'p') {
//     playerDealsACard();
//   }
//   displayCenterPile();
// }



function handlePlayerEvents(event) {
  if (event.key === "q" && currentGame.player1.currentPlayer) {
    currentGame.playCardToMiddle('player1');
  } else if (event.key === "p" && currentGame.player2.currentPlayer) {
    currentGame.playCardToMiddle('player2');
  } else if (event.key === 'f') {
    //player1 slaps
    handleSlapOutcome(event)
  } else if (event.key === 'j') {
    //player2 slaps
    handleSlapOutcome(event)
  }
  displayCenterPile();
}


// function playerDealsACard() {
//   if (currentGame.player1.currentPlayer) {
//     currentGame.playCardToMiddle('player1');
//   } else if (currentGame.player2.currentPlayer) {
//     currentGame.playCardToMiddle('player2');
//   }
// }
function handlePlayerTurn() {
  
}

function handleSlapOutcome(event) {
  var currentCard = currentGame.centerPile[0].number;
  if (currentCard === 11 || currentCard === currentGame.centerPile[1].number || currentCard === currentGame.centerPile[2].number) {
    handleLegalSlap(event)
  }
}

function handleLegalSlap(event) {
  currentGame.legalSlap(event);
}

function displayCenterPile() {
  resetCenterPile();
  var topCard = `<img src=${currentGame.centerPile[0].src} alt="Current Played Card" class="current-card cards">`;
  centerDeck.insertAdjacentHTML('afterbegin', topCard);
}

function resetCenterPile() {
  centerDeck.innerHTML = '';
}
