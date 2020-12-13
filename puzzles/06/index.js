const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/06/input.txt", "utf8")
  .split(/\n{2,}/g)
  .map((input) => input.replace(/\n/g, " ").split(" "));
// console.log(inputs);

const part1 = () => {
  const inputs1 = inputs.map((ip) => {
    let arr = [];
    ip.forEach((i) => {
      arr = [...arr, ...i.split("")];
    });
    return arr;
  });

  const counts = inputs1.map((ip) => {
    let choice = [];
    ip.forEach((c) => {
      if (!choice.includes(c)) {
        choice = [...choice, c];
      }
    });
    return choice.length;
  });

  // sum counts result
  const total = counts.reduce((p, c) => p + c);
  console.log(total);
};

const part2 = () => {
  const inputs2 = inputs.map((ip) => ip.map((i) => i.split("")));
  let counts = [];

  inputs2.forEach((input) => {
    let its = [];
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        its = input[i];
      } else {
        its = its.filter((num) => input[i].includes(num));
      }
    }
    counts = [...counts, its.length];
  });

  // sum counts result
  const total = counts.reduce((p, c) => p + c);
  console.log(total);
};

part1();
part2();
