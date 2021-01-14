class Player {
  constructor(id) {
    this.wins = 0;
    this.hand = [];
    this.id = id;
    this.currentPlayer = true;
  }

  playCard() {
    this.hand.shift();
  }

  saveWinsToStorage() {

  }
}
