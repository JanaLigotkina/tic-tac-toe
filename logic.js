let gameBoard,
  players = ['x', 'o'],
  activeIndexPlayer = 0,
  numberLine = 0,
  numberColumn = 0;

function startGame() {
  gameBoard = [
    ['', '', '',],
    ['', '', '',],
    ['', '', '',],
  ];
  activeIndexPlayer = Math.floor(Math.random() * 2);
  renderBoard(gameBoard);
}

function click(numberLine, numberColumn) {
  if (!gameBoard[numberLine][numberColumn]) {
    gameBoard[numberLine][numberColumn] = players[activeIndexPlayer];
    renderBoard(gameBoard);

    if (check(gameBoard, activeIndexPlayer)) {
      showWinner(activeIndexPlayer);
    } else {
      activeIndexPlayer = activeIndexPlayer == 0 ? 1 : 0;
    }
  }
}

function check(gameBoard, activeIndexPlayer) {
  let regularDiag = [],
    wrongDiag = [],
    countLine = 0,
    countColumn = 0,
    countRegularDiag = 0,
    countWrongDiag = 0;

  for (let i = 0; i < gameBoard.length; i++) {
    countLine = 0;
    countColumn = 0;

    for (let j = 0; j < gameBoard[i].length; j++) {

      if (gameBoard[i][j] && gameBoard[i][j] === players[activeIndexPlayer]) {
        countLine += 1;

        if (countLine === gameBoard.length) {
          return true;
        }
      }

      if (gameBoard[j][i] && gameBoard[j][i] === players[activeIndexPlayer]) {
        countColumn += 1;

        if (countColumn === gameBoard.length) {
          return true;
        }
      }

      /* Делаем массив главной диогонали */
      if (i === j) {
        regularDiag.push(gameBoard[i][j]);
      }
      /* Делаем массив не главной диогонали*/
      if (i + j === gameBoard.length - 1) {
        wrongDiag.push(gameBoard[i][j]);
      }
    }
  }

  for (let i = 0; i < regularDiag.length; i++) {
    if (regularDiag[i] && regularDiag[i] === players[activeIndexPlayer]) {
      countRegularDiag += 1;
    }
    if (countRegularDiag === gameBoard.length) {
      return true;
    }
  }

  for (let i = 0; i < wrongDiag.length; i++) {
    if (wrongDiag[i] && wrongDiag[i] === players[activeIndexPlayer]) {
      countWrongDiag += 1;
    }
  }
  if (countWrongDiag === gameBoard.length) {
    return true;
  }
}
