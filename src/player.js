class Player {
  constructor(id, wins) {
    this.wins = wins;
    this.hand = [];
    this.id = id;
    this.currentPlayer = false;
  }

  playCard() {
    console.log(this);
    this.hand.shift();
  }

  saveWinsToStorage() {
    var savedWin = JSON.stringify(this.wins);
    var key = this.id;
    localStorage.setItem(key, savedWin);
  }
}
