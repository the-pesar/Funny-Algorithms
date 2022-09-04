const RIGHT = 0;
const UP = 1;
const LEFT = 2;
const DOWN = 3;

const n = 100;

const canvas = document.getElementById("ulam");
canvas.style.backgroundColor = "black";

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const ctx = canvas.getContext("2d");

const CELL_W = Math.ceil(WIDTH / Math.sqrt(n));
const CELL_H = Math.ceil(HEIGHT / Math.sqrt(n));

const COUNT_X = Math.ceil(WIDTH / CELL_W);
const COUNT_Y = Math.ceil(HEIGHT / CELL_H);

const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const getPixelLocation = (x, y) => {
  return [x * CELL_W, y * CELL_H];
};

const getCenter = (x, y) => {
  const [px, py] = getPixelLocation(x, y);
  return [px + CELL_W / 2, py + CELL_H / 2];
};

const fillCell = (num, highlight) => {
  ctx.beginPath();
  ctx.fillStyle = highlight ? "cyan" : "blue";
  let [cell_x, cell_y] = getCenter(x, y);
  ctx.ellipse(cell_x, cell_y, CELL_W / 2, CELL_H / 2, 0, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "magenta";
  ctx.font = "10px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(num, cell_x, cell_y);
  ctx.fill();
};

let x = Math.floor(COUNT_X / 2);
let y = Math.floor(COUNT_Y / 2);
let dir = RIGHT;
let step = 1;
let remaining_steps = step;
let turns = 0;

for (let i = 1; i <= n; i++) {
  const label = n < 500 ? i : "";
  fillCell(label, isPrime(i));

  switch (dir) {
    case UP: {
      y--;
      break;
    }
    case DOWN: {
      y++;
      break;
    }
    case LEFT: {
      x--;
      break;
    }
    case RIGHT: {
      x++;
      break;
    }
  }

  remaining_steps--;

  if (remaining_steps === 0) {
    turns++;
    if (turns === 2) {
      step++;
      turns = 0;
    }
    remaining_steps = step;
    dir = (dir + 1) % 4;
  }
}
