const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const player = "X";
const ai = "O";

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
const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
  }
};

const print = () => {
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

const isFinished = () => {
  return !board.reduce(
    (foundEmpty, cell) => foundEmpty || !["X", "O"].includes(cell),
    false
  );
};

const game = async () => {
  print();
  while (!isFinished()) {
    await play("X");
    print();
    if (isWon("X")) {
      console.log("X won!");
      break;
    }
    console.log("========================");
  }
  rl.close();
};

const isWon = turn => {
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
