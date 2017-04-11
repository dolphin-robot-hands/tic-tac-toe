var TicTacToe = function() {
  var board;
  var turn;

  //render board
  function render() {
    var table = $('<table>');
    for( var y = 0; y < 3; y++) {
      var row = $('<tr>');
      table.append(row);
      for( var x = 0; x < 3; x++) {
        index = x+","+y;
        contents = board[x][y];
        var cell = $('<td>').attr('id',index).text(contents);
        row.append(cell);
      }
    }
    $('#tictactoe').append(table);
  };

  function changeTurn() {
    switch(turn) {
      case 'X':
        return 'O';
      case 'O':
        return 'X';
    }
  }

  function checkBoard(x, y) {
    //vertical
    if( turn === board[x][0] && turn === board[x][1] && turn === board[x][2] ){
        return true;
    }
    if( turn === board[0][y] && turn === board[1][y] && turn === board[2][y] ){
        return true;
    }
    if( turn === board[0][0] && turn === board[1][1] && turn === board[2][2] ){
        return true;
    }
    if( turn === board[2][0] && turn === board[1][1] && turn === board[0][2] ){
        return true;
    }
    return false;
  }

  // set all board spaces to blank
  function resetBoard() {
    board = [["","",""],["","",""],["","",""]];
    $('td').text("");
    console.log(board);
  };

  return {
    initiate: function() {
                turn = 'X';
                resetBoard();
                render();
              },

    clicked: function(cellClicked) {
                x = cellClicked.attr('id').slice(0,1);
                y = cellClicked.attr('id').slice(2,3);

                if (cellClicked.text() === "") {
                  cellClicked.text(turn);
                  board[x][y] = turn;

                  if( checkBoard(x, y)) {
                    alert(turn + " won!!!");
                    resetBoard();
                  }
                  turn = changeTurn();
                }
              }
  };
};

$(document).ready( function() {
  tictactoe = new TicTacToe();
  tictactoe.initiate();

  $( 'table').on('click', 'td', function() {
    tictactoe.clicked($(this));
  });
});
