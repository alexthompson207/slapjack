class Game {
  constructor() {

    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.centerPile = [];
    this.deck = [
      { src: "./assets/blue-01.png", number: 1 },
      { src: "./assets/blue-02.png", number: 2 },
      { src: "./assets/blue-03.png", number: 3 },
      { src: "./assets/blue-04.png", number: 4 },
      { src: "./assets/blue-05.png", number: 5 },
      { src: "./assets/blue-06.png", number: 6 },
      { src: "./assets/blue-07.png", number: 7 },
      { src: "./assets/blue-08.png", number: 8 },
      { src: "./assets/blue-09.png", number: 9 },
      { src: "./assets/blue-10.png", number: 10 },
      { src: "./assets/blue-jack.png", number: 11 },
      { src: "./assets/blue-queen.png", number: 12 },
      { src: "./assets/blue-king.png", number: 13 },
      { src: "./assets/gold-01.png", number: 1 },
      { src: "./assets/gold-02.png", number: 2 },
      { src: "./assets/gold-03.png", number: 3 },
      { src: "./assets/gold-04.png", number: 4 },
      { src: "./assets/gold-05.png", number: 5 },
      { src: "./assets/gold-06.png", number: 6 },
      { src: "./assets/gold-07.png", number: 7 },
      { src: "./assets/gold-08.png", number: 8 },
      { src: "./assets/gold-09.png", number: 9 },
      { src: "./assets/gold-10.png", number: 10 },
      { src: "./assets/gold-jack.png", number: 11 },
      { src: "./assets/gold-queen.png", number: 12 },
      { src: "./assets/gold-king.png", number: 13 },
      { src: "./assets/green-01.png", number: 1 },
      { src: "./assets/green-02.png", number: 2 },
      { src: "./assets/green-03.png", number: 3 },
      { src: "./assets/green-04.png", number: 4 },
      { src: "./assets/green-05.png", number: 5 },
      { src: "./assets/green-06.png", number: 6 },
      { src: "./assets/green-07.png", number: 7 },
      { src: "./assets/green-08.png", number: 8 },
      { src: "./assets/green-09.png", number: 9 },
      { src: "./assets/green-10.png", number: 10 },
      { src: "./assets/green-jack.png", number: 11 },
      { src: "./assets/green-queen.png", number: 12 },
      { src: "./assets/green-king.png", number: 13 },
      { src: "./assets/red-01.png", number: 1 },
      { src: "./assets/red-02.png", number: 2 },
      { src: "./assets/red-03.png", number: 3 },
      { src: "./assets/red-04.png", number: 4 },
      { src: "./assets/red-05.png", number: 5 },
      { src: "./assets/red-06.png", number: 6 },
      { src: "./assets/red-07.png", number: 7 },
      { src: "./assets/red-08.png", number: 8 },
      { src: "./assets/red-09.png", number: 9 },
      { src: "./assets/red-10.png", number: 10 },
      { src: "./assets/red-jack.png", number: 11 },
      { src: "./assets/red-queen.png", number: 12 },
      { src: "./assets/red-king.png", number: 13 },
    ];
  }

  shuffleCards(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
    var swapIndex = Math.floor(Math.random() * (i + 1))
    var currentCard = deck[i]
    var cardToSwap = deck[swapIndex]
    deck[i] = cardToSwap;
    deck[swapIndex] = currentCard;
  }
  return deck;
 }

 dealDeck() {
   this.shuffleCards(this.deck);
   this.player1.hand = this.deck.slice(0, 26);
   this.player2.hand = this.deck.slice(26, 52);
   this.deck = [];
 }

 playerTurn() {
   if (this.player1.currentPlayer && this.player1.hand.length > 0 && this.player2.hand.length > 0) {
     this.player1.currentPlayer = false;
     this.player2.currentPlayer = true;
   } else if (this.player2.currentPlayer && this.player1.hand.length > 0 && this.player2.hand.length > 0) {
     this.player1.currentPlayer = true;
     this.player2.currentPlayer = false;
   }
 }

 playCardToMiddle() {
   if (this.player1.currentPlayer) {
     // this.centerPile.unshift(this.player1.hand[0]);
     this.player1.playCard();
     this.playerTurn();
   } else if (this.player2.currentPlayer) {
     // this.centerPile.unshift(this.player2.hand[0]);
     this.player2.playCard();
     this.playerTurn();
   }
 }

 legalSlap(player) {
   var topCard = this.centerPile[0];
   var secondCard = this.centerPile[1];
   var thirdCard = this.centerPile[2];
   if (topCard.number === 11) {
     this[player].hand = this[player].hand.concat(this.centerPile);
     this.centerPile = [];
     this.shuffleCards(this[player].hand);
   } else if (topCard.number === secondCard.number) {
     this[player].hand = this[player].hand.concat(this.centerPile);
     this.centerPile = [];
     this.shuffleCards(this[player].hand);
   } else if (topCard.number === thirdCard.number) {
     this[player].hand = this[player].hand.concat(this.centerPile);
     this.centerPile = [];
     this.shuffleCards(this[player].hand);
   // } else {
   //   badSlap();
   }
 }

 // winTurn(player) {
 //   this[player].hand = this[player].hand.concat(this.centerPile);
 //   this.centerPile = [];
 //   this.shuffleCards(this[player].hand);
 // }

  badSlap() {
    //player 1 bad slap --make dynamic!! use id?
    this.player2.hand.push(this.player1.hand[0]);
    this.player1.hand.shift();
  }

  survivalRound() {


  }

  gameEndSlap() {
    if (this.player1.hand.length === 0) {
      this.player2.wins++;
    } else if (this.player2.hand.length === 0) {
      this.player1.wins++;
    }
  }

  resetDeck() {
    this.deck = this.centerPile;
    this.deck = this.deck.concat(this.player1.hand);
    this.deck = this.deck.concat(this.player1.hand);
    this.centerPile = [];
    this.player1.hand = [];
    this.player2.hand = [];

  }


}
