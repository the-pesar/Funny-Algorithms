const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Try play with O :)

const player = "X";
const ai = "O";

const players = ["X", "O"];
let turnIndex = 0;

// If any of these combinations captured by a player, that player will win
const winIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*  This is the 3*3 board
    Rows are counted from top to bottom
    Columns are counted from left to right
    to get r1c2 cell: board[(1-1)*3 + (2-1)]
    or you can simply use board[location - 1]
    the "minus ones" are because 0=1 :)
 */
let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const getInput = () => {
  return new Promise((resolve, reject) => {
    rl.question("Your turn:\n> ", response => {
      resolve(response);
    });
  });
};

const isEmpty = loc => {
  return board.includes(`${loc}`);
};

const place = (loc, turn) => {
  board[loc - 1] = turn;
};

const play = async turn => {
  if (turn === player) {
    do {
      try {
        const loc = +(await getInput());
        if (loc < 1 || loc > 9 || !isEmpty(loc)) {
          throw new Error();
        }

        place(loc, turn);
        break;
      } catch (err) {
        console.log("Invalid Input");
      }
    } while (true);
  } else if (turn === ai) {
    const [_sc, newBoard] = minimax(board, turn);
    board = newBoard;
  }
};

const print = board => {
  console.log("=======");
  let result = "|";
  for (let i = 0; i < 9; i++) {
    result += board[i] + "|";
    if ((i + 1) % 3 === 0) {
      console.log(result);
      result = "|";
    }
  }
  console.log("=======");
};

const isFinished = board => {
  return !board.reduce(
    (foundEmpty, cell) => foundEmpty || !["X", "O"].includes(cell),
    false
  );
};

const minimax = (board, turn, depth = 0) => {
  const op = turn === "X" ? "O" : "X";
  if (isFinished(board) || isWon(op, board)) {
    if (isWon(op, board)) {
      return [depth - 10, board];
    }
    return [0, board];
  }

  let bestScore = -10;
  let bestBoard = null;

  for (let i = 0; i < 9; i++) {
    const cell = board[i];
    if (["X", "O"].includes(cell)) continue;
    const newBoard = [...board];
    newBoard[i] = turn;

    const [opScore] = minimax(newBoard, op, depth + 1);
    const score = -opScore;

    if (score > bestScore) {
      bestScore = score;
      bestBoard = newBoard;
    }
  }

  return [bestScore, bestBoard];
};

const game = async () => {
  print(board);
  while (!isFinished(board)) {
    let turn = players[turnIndex];
    await play(turn);
    print(board);
    if (isWon(turn, board)) {
      console.log(`${turn} won!`);
      break;
    }
    console.log("========================");
    turnIndex = (turnIndex + 1) % 2;
  }
  rl.close();
};

const isWon = (turn, board) => {
  for (let indexes of winIndexes) {
    let count = 0;
    for (let i of indexes) if (board[i] === turn) count++;
    if (count === 3) return true;
  }
  return false;
};

game().then(() => {
  console.log("Closing...");
});
