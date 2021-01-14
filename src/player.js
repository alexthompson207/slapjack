class Player {
  constructor(id) {
    this.wins = 0;
    this.hand = [];
    this.id = id;
  }

  playCard() {
    this.hand.shift();
  }

  saveWinsToStorage() {

  }
}
