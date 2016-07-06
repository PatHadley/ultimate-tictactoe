angular
  .module("UlticUltacUltoe")
  .controller("TicTacToeController", TicTacToeController);

function TicTacToeController(){
  this.winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];
  this.reset       = resetBoard;
  this.checkForWin = checkForWin;
  this.move        = addXorO
  this.reset();

  function addXorO(index){
    // Ensure you can't play the same square twice
    if (this.cells[index]) return false;

    this.counter++;

    if (this.counter % 2 === 0) {
      this.oMoves.push(index);
      this.cells[index] = 'O';
      this.message = "It is X's turn";
      this.checkForWin(this.oMoves, "O");
    } else {
      this.xMoves.push(index);
      this.cells[index] = 'X';
      this.message = "It is O's turn";
      this.checkForWin(this.xMoves, "X");
    }
    
    // if the counter is greater than or equal to 10, the game is a draw!
    if (this.counter === 9 && this.win === false){
      this.message = "Game Over! It's a Tie!";
      this.win = true;
    }
  }

  function checkForWin(movesArray, name){
    // loop over the first array of winning combinations
    for (i = 0; i < this.winningCombinations.length; i++) {
      // reset the winCounter each time!
      this.winCounter = 0;

      // loop over each individual array
      for (var j = 0; j < this.winningCombinations[i].length; j++) {

        // if the number in winning combo array is === a number in moves array, add to winCounter
        if (movesArray.indexOf(this.winningCombinations[i][j]) !== -1){
          this.winCounter++;
        }

        // if winCounter === 3 that means all 3 moves are winning combos and game is over!
        if (this.winCounter === 3){
          this.message = "Game over, " + name + " wins!";
          this.win = true;
        }
      }
    }
  }

  function resetBoard(){
    this.cells      = new Array(9);
    this.oMoves     = [];
    this.xMoves     = [];
    this.counter    = 0;
    this.message = "Welcome to TicTacToe";
    this.win        = false;
    this.winCounter;
  }
}