var game;

// var playerOneDeck = document.querySelector('.player-one-deck');
// var playerTwoDeck = document.querySelector('.player-two-deck');
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
  displayPlayerDeck();
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
  gameMessage.innerText = '';
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
  gameMessage.innerText = '';
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
    handleSurvivalRoundSlap(event, currentCard);
  } else if (currentCard === 11 || (currentGame.centerPile.length > 1) && (currentCard === currentGame.centerPile[1].number) || (currentGame.centerPile.length > 2) && (currentCard === currentGame.centerPile[2].number)) {
    displayLegalSlapUpdate(currentCard, event);
    currentGame.legalSlap(event);
    console.log('SLAPPER!!');
  } else {
    displayBadSlapUpdate(event);
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


// 1. When a Jack is revealed, the player who is out of cards can slap it.
// The central pile is then their new hand, the game continues as normal. CHECK
//
// 2. If however, the player who is out of cards slaps something that is not a Jack,
// or if the player who still has cards slaps the Jack first, then the player who is
// out of cards loses and the game is over!
//
// 3. Doubles and Sandwiches are not valid when one player is completely out of cards -
// in this case, only a Jack can save them!
//
// 4. The only way the player who still has cards can win is by slapping the Jack before
// the player without cards left does

function handleSurvivalRoundSlap(event, currentCard) {
  if ((event.key === 'f' && currentCard === 11 && currentGame.player1.hand.length === 0) || (event.key === 'j' && currentCard === 11 && currentGame.player2.hand.length === 0)) {
    currentGame.legalSlap(event);
    console.log('SLAP');
  } else if ((event.key === 'f' && currentCard === 11 && currentGame.player2.hand.length === 0) || (event.key === 'j' && currentCard === 11 && currentGame.player1.hand.length === 0) || (event.key === 'f' && currentGame.player1.hand.length === 0) || (event.key === 'j' && currentGame.player2.hand.length === 0)) {
    currentGame.gameEndSlap();
    console.log('WINNER');
    console.log(currentGame);
    // currentGame.resetDeck();
  } else if ((event.key === 'f' && currentGame.player2.hand.length === 0) || (event.key === 'j' && currentGame.player1.hand.length === 0)) {
    displayBadSlapUpdate(event);
    currentGame.badSlap(event);
    console.log('BAD SLAPPER');
  }
}

function displayLegalSlapUpdate(currentCard, event) {
  gameMessage.innerText = '';
  if(currentCard === 11 && event.key === 'f' ) {
    gameMessage.innerText = `SLAPJACK! Player 1 takes the pile!`;
  } else if (currentCard === 11 && event.key === 'j' ) {
  gameMessage.innerText = `SLAPJACK! Player 2 takes the pile!`;
  } else if ((currentCard === currentGame.centerPile[1].number) && event.key === 'f' ) {
  gameMessage.innerText = `DOUBLE! Player 1 takes the pile!`;
  } else if ((currentCard === currentGame.centerPile[1].number) && event.key === 'j' ) {
  gameMessage.innerText = `DOUBLE! Player 2 takes the pile!`;
  } else if ((currentCard === currentGame.centerPile[2].number) && event.key === 'j' ) {
  gameMessage.innerText = `SANDWICH! Player 2 takes the pile!`;
  } else if ((currentCard === currentGame.centerPile[2].number) && event.key === 'f' ) {
  gameMessage.innerText = `SANDWICH! Player 2 takes the pile!`;
  }
}

function displayBadSlapUpdate(event) {
  gameMessage.innerText = '';
  if(event.key === 'f' ) {
    gameMessage.innerText = `BAD SLAP! Player 1 forfeits a card to Player 2!`;
  } else if (event.key === 'j' ) {
  gameMessage.innerText = `BAD SLAP! Player 2 forfeits a card to Player 1!`;
  }
}

function displayPlayerDeck() {
  var playerOneDeck = document.querySelector('.one');
  var playerTwoDeck = document.querySelector('.two');
  var gameDecks = [currentGame.player1.hand, currentGame.player2.hand];
  var deckDOM = [playerOneDeck, playerTwoDeck];
  for (var i = 0; i < gameDecks.length; i++) {
    if(gameDecks[i].length === 0) {
      deckDOM[i].classList.add('hidden');
    } else {
      deckDOM[i].classList.remove('hidden');
    }
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
