const { readFileSync } = require("../../services/utils");

const data = readFileSync("./puzzles/01/input.txt", "utf8")
  .split("\n")
  .map((n) => +n);

const part1 = () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === 2020) {
        console.log(data[i] + "*" + data[j] + "=" + data[i] * data[j]);
      }
    }
  }
};

const part2 = () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      for (let k = j + 1; k < data.length; k++) {
        if (data[i] + data[j] + data[k] === 2020) {
          console.log(
            data[i] +
              "*" +
              data[j] +
              "*" +
              data[k] +
              "=" +
              data[i] * data[j] * data[k]
          );
        }
      }
    }
  }
};

part1();
part2();
