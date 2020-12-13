const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/09/input.txt", "utf8")
  .split("\n")
  .map((i) => +i);
// console.log(inputs);

const part1 = (pab) => {
  for (let i = pab; i < inputs.length; i++) {
    let count = 0;
    for (let j = i - 1; j > i - pab; j--) {
      for (let k = j - 1; k >= i - pab; k--) {
        if (inputs[j] + inputs[k] === inputs[i]) {
          count++;
        }
      }
    }
    if (count === 0) {
      // console.log("inValid", inputs[i]);
      return inputs[i];
    }
  }
};

const part2 = () => {
  const ivl = part1(25);
  console.log(ivl);
  let index = 0;
  let checked = [];
  for (let i = 0; i < inputs.length; i++) {
    checked = [...checked, inputs[i]];
    const sum = checked.reduce((p, e) => p + e);
    if (sum === ivl && checked.length > 1) {
      break;
    } else if (sum > ivl) {
      index++;
      i = index;
      checked = [];
    }
  }

  const min = Math.min(...checked);
  const max = Math.max(...checked);
  console.log("encryption weakness", min + max);
};

// part1(25);
part2();
