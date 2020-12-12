const { readFileSync } = require("../../services/utils");

const data = readFileSync("./puzzles/02/input.txt", "utf8")
  .split("\n")
  .map((n) => {
    const pwd = n.split(" ");
    const range = pwd[0].split("-");
    return {
      min: +range[0],
      max: +range[1],
      cha: pwd[1].split(":").join(""),
      pwd: pwd[2],
    };
  });

const part1 = () => {
  let total = 0;
  data.forEach((d) => {
    let count = 0;
    d.pwd.split("").forEach((cha) => {
      if (cha === d.cha) {
        count++;
      }
    });
    if (count >= d.min && count <= d.max) {
      total++;
    }
  });
  console.log(total);
};

const part2 = () => {
  let total = 0;
  data.forEach((d) => {
    const chas = d.pwd.split("");
    if (chas[d.min - 1] === d.cha || chas[d.max - 1] === d.cha) {
      if (chas[d.min - 1] !== chas[d.max - 1]) {
        total++;
      }
    }
  });
  console.log(total);
};

part1();
part2();
