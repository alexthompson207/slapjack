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
  if (event.key === "q" && currentGame.player1.currentPlayer && currentGame.player1.hand.length > 0) {
    handlePlayer1Turn();
  } else if (event.key === "p" && currentGame.player2.currentPlayer && currentGame.player2.hand.length > 0) {
    handlePlayer2Turn();
  } else if (event.key === 'f') {
    //player1 slaps
    handleSlapOutcome(event)
  } else if (event.key === 'j') {
    //player2 slaps
    handleSlapOutcome(event)
  }
  displayCenterPile();
  // currentGame.survivalPlayerTurn();

}

function handlePlayer1Turn() {
  // for later both players hands equal 0 restart game
  if (currentGame.player1.hand.length === 1 && currentGame.player2.hand.length === 0) {
    currentGame.playCardToMiddle();
    currentGame.survivalShuffle();
  } else if (currentGame.player2.hand.length === 0) {
    console.log('One');
    currentGame.survivalPlayerTurn();
  } else {
    currentGame.playCardToMiddle();
  }
}

function handlePlayer2Turn() {
  // for later both players hands equal 0 restart game
  if (currentGame.player2.hand.length === 1 && currentGame.player1.hand.length === 0) {
    currentGame.playCardToMiddle();
    currentGame.survivalShuffle();
  } else if (currentGame.player1.hand.length === 0) {
    console.log('Two');
    currentGame.survivalPlayerTurn();
  } else {
    currentGame.playCardToMiddle();
  }
}

// function handlePlayerTurn() {
//   // for later both players hands equal 0 restart game
//   if ((currentGame.player1.hand.length === 1 && currentGame.player2.hand.length === 0) || (currentGame.player2.hand.length === 1 && currentGame.player1.hand.length === 0)) {
//     currentGame.playCardToMiddle();
//     currentGame.survivalShuffle();
//     console.log('bye');
//   } else if (currentGame.player1.hand.length === 0 || currentGame.player2.hand.length === 0) {
//     currentGame.survivalPlayerTurn();
//     console.log('hi');
//   } else {
//     currentGame.playCardToMiddle();
//   }
// }

function handleSlapOutcome(event) {
  var currentCard = currentGame.centerPile[0].number;
  if (currentGame.player1.hand.length === 0 || currentGame.player2.hand.length === 0) {
    //survivalRoundSlap
  } else if (currentCard === 11 || (currentGame.centerPile.length > 1) && (currentCard === currentGame.centerPile[1].number) || (currentGame.centerPile.length > 2) && (currentCard === currentGame.centerPile[2].number)) {
    currentGame.legalSlap(event);
    console.log('SLAPPER!!');
  } else {
    handleBadSlap(event);
    console.log('BAD SLAP');
  }
}

// if (currentCard === 11 || currentCard === currentGame.centerPile[1].number || currentCard === currentGame.centerPile[2].number) {
//   handleLegalSlap(event)
// }

function handleBadSlap(event) {
  currentGame.badSlap(event);
}


function handleLegalSlapPlayer1(event) {
  if(currentGame.player1.hand > 0 && currentGame.player2.hand === 0) {
    currentGame.gameEndSlap();
  } else if (currentGame.player1.hand === 0) {
    currentGame.legalSlap(event);
  }
}

function displayCenterPile() {
  resetCenterPile();
  if (currentGame.centerPile.length > 0) {
    var topCard = `<img src=${currentGame.centerPile[0].src} alt="Current Played Card" class="current-card cards">`;
    centerDeck.insertAdjacentHTML('afterbegin', topCard);
  }
}

function resetCenterPile() {
  centerDeck.innerHTML = '';
}
