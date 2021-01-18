class Player {
  constructor(id) {
    this.wins = 0;
    this.hand = [];
    this.id = id;
    this.currentPlayer = false;
  }

  playCard() {
    console.log(this);
    this.hand.shift();
  }

  saveWinsToStorage() {

  }
}
