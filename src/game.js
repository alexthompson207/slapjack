class Game {
  constructor() {

    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.centerPile = [];
    this.turn = false;
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
  return deck
}

}
