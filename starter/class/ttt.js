const Screen = require("./screen");
const Cursor = require("./cursor");
const ComputerPlayer = require("./computer-player");

class TTT {

 constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    //Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('up',   'move upward'  , ()=>{this.cursor.up(); Screen.render()});
    Screen.addCommand('down', 'move downward', ()=> {this.cursor.down(); Screen.render()});
    Screen.addCommand('left', 'move left', ()=>{ this.cursor.left(); Screen.render()});
    Screen.addCommand('right', 'move right',()=>{ this.cursor.right();Screen.render()});
    Screen.addCommand('p','current player moves', ()=>{


      if(this.grid[this.cursor.row][this.cursor.col]==' ')
      {

         this.grid[this.cursor.row][this.cursor.col]=this.playerTurn;

         Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

         let A = TTT.checkWin(this.grid);
         if(A) TTT.endGame(A);



         let AI = ComputerPlayer.getSmartMove(this.grid, 'X')

         this.grid[AI.row][AI.col]= 'X';

         Screen.setGrid(AI.row, AI.col, 'X');

         A = TTT.checkWin(this.grid);

         if(A) TTT.endGame(A);

         //if(this.playerTurn ==='O') this.playerTurn = 'X';
         //else this.playerTurn ='O';

        Screen.render();
      }

    } )


    //this.grid[1][1]="*";

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    //let ret=false;
    let char;
    if(grid[0][0]!=' ')
    {
        char=grid[0][0];
        if(grid[0][1]===char && grid[0][2]===char) return(char);
        if(grid[1][0]===char && grid[2][0]===char) return(char);
        if(grid[1][1]===char && grid[2][2]===char) return(char);
    }
    if(grid[1][0]!=' ' )
    {
        char = grid[1][0];
        if(grid[1][1]===char && grid[1][2]===char) return(char);
    }

    if(grid[2][0]!=' ')
    {
        char=grid[2][0];
        if(grid[1][1]===char && grid[0][2]===char) return(char);
        if(grid[2][1]===char && grid[2][2]===char) return(char);
    }

    if(grid[0][1]!=' ')
    {
      char = grid[0][1];
      if(grid[1][1]===char && grid[2][1]===char) return(char);
    }

    if(grid[0][2]!=' ')
    {
      char = grid[0][2];
      if(grid[1][2]===char && grid[2][2]===char) return(char);
    }

    for(let i=0;i<=2;i++)
    {
      for(let j=0;j<=2;j++)
      {
        if(grid[i][j] == ' ') return(false);
      }
    }


    return('T');
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
