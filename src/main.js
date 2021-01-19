var currentGame;

var centerDeck = document.querySelector('.center-deck');
var gameMessage = document.querySelector('.game-update');

window.addEventListener('load', startNewGame);

function startNewGame() {
  if (!currentGame) {
    currentGame = new Game();
  }
  window.addEventListener('keydown', handlePlayerEvents);
  currentGame.dealDeck();
  resetCenterPile();
  displayPlayerWinCount();
}

function handlePlayerEvents(event) {
  if (event.key === "q" && currentGame.player1.currentPlayer && currentGame.player1.hand.length > 0) {
    handlePlayer1Turn();
  } else if (event.key === "p" && currentGame.player2.currentPlayer && currentGame.player2.hand.length > 0) {
    handlePlayer2Turn();
  } else if (event.key === 'f' || event.key === 'j') {
    handleSlapOutcome(event);
  }
  displayCenterPile();
  displayPlayerDeck();
}

function handlePlayer1Turn() {
  // for later both players hands equal 0 restart game
  if (currentGame.player1.hand.length === 1 && currentGame.player2.hand.length === 0) {
    currentGame.playCardToMiddle();
    currentGame.survivalShuffle();
  } else if (currentGame.player2.hand.length === 0) {
    console.log('One');
    currentGame.survivalPlayerTurn();
    displayCenterPile();
  } else {
    currentGame.playCardToMiddle();
  }
  gameMessage.innerText = '';
}

function handlePlayer2Turn() {
  if (currentGame.player2.hand.length === 1 && currentGame.player1.hand.length === 0) {
    currentGame.playCardToMiddle();
    currentGame.survivalShuffle();
  } else if (currentGame.player1.hand.length === 0) {
    console.log('Two');
    currentGame.survivalPlayerTurn();
    displayCenterPile();
  } else {
    currentGame.playCardToMiddle();
  }
  gameMessage.innerText = '';
}

function handleSlapOutcome(event) {
  var currentCard = currentGame.centerPile[0].number;
  if (currentGame.player1.hand.length === 0 || currentGame.player2.hand.length === 0) {
    handleSurvivalRoundSlap(event, currentCard);
  } else if (currentCard === 11 || (currentGame.centerPile.length > 1) && (currentCard === currentGame.centerPile[1].number) || (currentGame.centerPile.length > 2) && (currentCard === currentGame.centerPile[2].number)) {
    displayLegalSlapUpdate(currentCard, event);
    currentGame.legalSlap(event);
    console.log('SLAPPER!!');
  } else {
    currentGame.badSlap(event);
    displayBadSlapUpdate(event);

    console.log('BAD SLAP');
  }
  displayCenterPile();
}

function handleBadSlap(event) {
  currentGame.badSlap(event);
}

function handleSurvivalRoundSlap(event, currentCard) {
  if ((event.key === 'f' && currentCard === 11 && currentGame.player1.hand.length === 0) || (event.key === 'j' && currentCard === 11 && currentGame.player2.hand.length === 0)) {
    displayLegalSlapUpdate(currentCard, event);
    currentGame.legalSlap(event);
    console.log('SLAP');
  } else if ((event.key === 'f' && currentCard === 11 && currentGame.player2.hand.length === 0) || (event.key === 'j' && currentCard === 11 && currentGame.player1.hand.length === 0) || (event.key === 'f' && currentGame.player1.hand.length === 0) || (event.key === 'j' && currentGame.player2.hand.length === 0)) {
    currentGame.gameEndSlap();
    displayPlayerWinCount();
    displayGameWinSlapUpdate(event);
    console.log('WINNER');
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
  gameMessage.innerText = `SANDWICH! Player 1 takes the pile!`;
  }
}

function displayBadSlapUpdate(event) {
  gameMessage.innerText = '';
  if(event.key === 'f') {
    gameMessage.innerText = `BAD SLAP! Player 1 forfeits a card to Player 2!`;
  } else if (event.key === 'j') {
  gameMessage.innerText = `BAD SLAP! Player 2 forfeits a card to Player 1!`;
  }
}

function displayGameWinSlapUpdate(event) {
  gameMessage.innerText = '';
  if(currentGame.player2.hand.length === 0) {
    gameMessage.innerText = `Player 1 WINS!`;
  } else if (currentGame.player1.hand.length === 0) {
  gameMessage.innerText = `Player 2 WINS!`;
  }
  displayGameWinner(event);
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
    var topCard = `<img src=${currentGame.centerPile[0].src} alt="Current Played Card" class="current-card middle cards">`;
    centerDeck.insertAdjacentHTML('afterbegin', topCard);
    changeBackgroundCardColor();
  }
}

function displayPlayerWinCount() {
  var player1WinCount = document.querySelector('.player-one-wins');
  var player2WinCount = document.querySelector('.player-two-wins');
  player1WinCount.innerText = `${currentGame.player1.wins} Wins`;
  player2WinCount.innerText = `${currentGame.player2.wins} Wins`;
}

function displayGameWinner(event) {
  window.removeEventListener('keydown', handlePlayerEvents);
  var pausedGame = setTimeout (resetGameAfterWin, 2000);
}

function resetGameAfterWin(event) {
  currentGame.resetDeck();
  startNewGame(event, currentGame.player1, currentGame.player2);
  displayPlayerDeck();
  gameMessage.innerText = '';
}

function changeBackgroundCardColor() {
  var middleCard = document.querySelector('.middle');
    if (currentGame.player1.hand.length === 0 && currentGame.player2.currentPlayer) {
      middleCard.classList.add('card-style');
    } else if (currentGame.player2.hand.length === 0 && currentGame.player1.currentPlayer) {
      middleCard.classList.remove('card-style');
    } else if(currentGame.player1.currentPlayer && currentGame.player1.hand.length != 0) {
      middleCard.classList.add('card-style');
    } else if (currentGame.player2.currentPlayer && currentGame.player2.hand.length != 0) {
    middleCard.classList.remove('card-style');
    }
}

function resetCenterPile() {
  centerDeck.innerHTML = '';
}
