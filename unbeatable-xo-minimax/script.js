const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const player = "X";
const ai = "O";

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

play("X").then(() => {
  rl.close();
});
