const { readFileSync } = require("../../services/utils");

const input = readFileSync("./puzzles/03/input.txt", "utf8")
  .split("\n")
  .map((d) => {
    return d.split("");
  });

const part1 = (right, down) => {
  data = [...input];
  let tree = 0;
  let i = 0;
  let j = 0;

  while (i + down < data.length) {
    i += down;
    j += right;

    while (data[i].length <= j) {
      j %= data[i].length;
    }

    if (data[i][j] === "#") {
      tree++;
    }
  }

  console.log(tree);
  return tree;
};

const slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

let result = 1;

slopes.forEach((slope) => {
  result *= part1(slope.right, slope.down);
});

console.log(result);
