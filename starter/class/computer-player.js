///const TTT = require("./ttt");


class ComputerPlayer {

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

  static getValidMoves(grid) {

    let ret=[];

    for(let i=0;i<3;i++)
    {
      for(let j=0;j<3;j++)
      {
        if(grid[i][j]===' ')
        {
          ret.push({row: i , col: j})
        }
      }
    }

    return ret;
    // Your code here
  }

  static randomMove(grid) {

    let moves = ComputerPlayer.getValidMoves(grid);

    let n = moves.length;

    let c = Math.floor(n * Math.random() %n);

    //console.log(c);

    return(moves[c]);

    // Your code here
  }

  static getWinningMoves(grid, symbol) {

    /*
    let moves = ComputerPlayer.getSmartMove(grid, symbol);

    if(!Array.isArray(moves)) return moves;

    let Op;

    if(symbol === 'X') Op='O';
    else Op = 'X';

    let ret= [];

    for(m of moves)
    {
        grid[m.row][m.col] = symbol;
        ret = getWinningMoves(grid, Op);

        if(ret!='T') return ret;

        grid[m.row][m.col] = ' ';
    }

    if(ret === 'T') return(moves[0]);
    */
    //return ret;



    // Your code here

  }

  static getSmartMove(grid, symbol) {

    //console.log("hello??????");
    let moves = ComputerPlayer.getValidMoves(grid);

    if(moves.lenght === 0) return('T');

    let ret=[];

    //console.log("hello????")

    for(const m of moves)
    {

      //console.log("hello?????");
      grid[m.row][m.col]=symbol;

      if(ComputerPlayer.checkWin(grid)===symbol)
      {
        //console.log("hello????");
        ret.push(m);
      }

      grid[m.row][m.col]=' ';
    }

    //console.log("winning move is: ");

    //for(const m of ret) console.log("(row: " + m.row + ' col: '+m.col);

    if(ret.length != 0)
    {

       let n=ret.length;

       return( ret[Math.floor(Math.random()*n)%n]);

    }

    //console.log( " hello????");

    let Op;

    if(symbol === 'X') Op = 'O';
    else Op = 'X';


    //console.log("hello?????");
    for(const m of moves)
    {

      grid[m.row][m.col]=Op;

      if(ComputerPlayer.checkWin(grid)===Op)
      {
        ret.push(m);
      }

      grid[m.row][m.col]=' ';
    }

    //console.log("hello???????");

    //console.log("blocking move is: ");

    //for(const m of ret) console.log("row: " + m.row + ' col: '+m.col);


    if(ret.length != 0)
    {

       let n=ret.length;

       return( ret[Math.floor(Math.random()*n)%n]);

    }

    //let n= moves.length;


    for(const m of moves)
    {
        if(m.row==1 && m.col ==1) return(m);
    }

    if(grid[1][1] === Op)
    for(const m of moves)
    {
        if(m.row==1 || m.col ==1) return(m);
    }

    for(const m of moves)
    {
        if(m.row!=1 && m.col !=1) return(m);
    }

    /*
    if(moves.includes({row:1, col:1}))
    {
      //console.log("hello???????")
      return({row:1,col:1})
    }*/

    //console.log("thensome");

    /*

    if(moves.includes({row:2, col:2}))
    {
      return({row:2,col:2})
    }

    if(moves.includes({row:2, col:0}))
    {
      return({row:2,col:0})
    }

    if(moves.includes({row:0, col:2}))
    {
      return({row:0,col:2})
    }

    if(moves.includes({row:0, col:0}))
    {
      return({row:0,col:0})
    }*/

    for(const m of moves)
    {

       if(m.row>0 && grid[m.row-1][m.col]===symbol)
       {
        return(m);
       }
       if(m.row<2 && grid[m.row+1][m.col]===symbol)
       {
        return(m);
       }
       if(m.col>0 && grid[m.row][m.col-1]===symbol)
       {
        return(m);
       }
       if(m.col<2 && grid[m.row][m.col+1]===symbol)
       {
        return(m);
       }

    }

    //return moves[Math.floor(Math.random()*n)%n]
    return(moves[0]);

    // Your code here

  }

}

module.exports = ComputerPlayer;
