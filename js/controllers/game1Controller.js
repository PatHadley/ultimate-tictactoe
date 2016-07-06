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
<<<<<<< HEAD
=======
angular
  .module("UlticUltacUltoe")
  .controller("TicTacToeController", TicTacToeController);

function TicTacToeController(){
  var arrWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];
     this.currentPlayer = "X";
     this.gameWinner = "";
     this.winnerMsg = "";
     this.allDisabled = true;
     this.currentBoard = "";
     var buttonStatus = "";

     this.games = [
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','',''],
       ['','','','','','','','','']
     ]

     this.checkWin = function(board) {
       console.log(board);
         for(var i = 0 ; i < arrWin.length; i++) {
           var combination = arrWin[i];
           if(board[combination[0]] == board[combination[1]] && board[combination[1]] == board[combination[2]])
               return board[combination[0]];
         }
         return false;
     }

     this.btClicked = function(position , board) {

       if (this.currentBoard === board || this.currentBoard === "") {
         this.games[board][position] = this.currentPlayer;
         this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
         this.gameWinner = this.checkWin(this.games[board]);
         if (this.gameWinner) {
             this.winnerMsg = "And the winner is " + this.gameWinner;
             console.log(this.winnerMsg);
         };
         this.currentBoard = position;
       }

     };

     this.desableBt = function(position, board) {
         return this.games[board][position] != buttonStatus;
     };


     var updateMove = function (position) {
       if (position.board == "1") {
         for (var i = 0; i < 8; i++) {
               if (arrWin[i].indexOf(position.mark) >= 0) {
                   arrWin[i][arrWin[i].indexOf(position.mark)]=position.value;
               }
           };
       }

     };

     var checkIfWinner = function(winner) {
         for (var i = 0; i < 8; i++) {
           if (arrWin[i][0] == arrWin[i][1] && arrWin[i][0] == arrWin[i][2]) {
               return winner;
           }
         }
     };

     return this;
}
>>>>>>> 709d54c2d05824b9cc75c9e2451540792180d380
