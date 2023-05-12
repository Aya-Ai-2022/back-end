const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 19 },
    { firstName: "Wael", lastName: "James", age: 22 },
    { firstName: "Jane", lastName: "Joe", age: 23 },
  ],
  _games: [
    { opponent: "Ahli", teamPoints: 5, opponentPoints: 10 },
    { opponent: "Helal", teamPoints: 4, opponentPoints: 11 },
    { opponent: "Zamalek", teamPoints: 3, opponentPoints: 9 },
  ],
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      newOpponent: newOpponent,
      newTeamPoints: newTeamPoints,
      newOpponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
