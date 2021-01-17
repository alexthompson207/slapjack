class Player {
  constructor(id) {
    this.wins = 0;
    this.hand = [];
    this.id = id;
    this.currentPlayer = false;
  }

  playCard() {
    console.log(this);
    // game.centerPile.unshift(this.hand[0]);
    this.hand.shift();
  }

  saveWinsToStorage() {

  }
}
