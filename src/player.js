class Player {
  constructor(id) {
    this.id = id;
    this.wins = JSON.parse(localStorage.getItem(`${this.id}`)) || 0;
    this.hand = [];
    this.currentPlayer = false;
  }

  playCard() {
    this.hand.shift();
  }

  saveWinsToStorage() {
    var savedWin = JSON.stringify(this.wins);
    var key = this.id;
    localStorage.setItem(key, savedWin);
  }
}
