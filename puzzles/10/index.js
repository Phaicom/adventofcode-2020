const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/10/input.txt", "utf8")
  .split("\n")
  .map((i) => +i);
// console.log(inputs);

const part1 = () => {
  let ips = [...inputs];
  ips = [...ips, Math.max(...ips) + 3].sort((a, b) => a - b);
  console.log(ips);
  let ol = 0;
  let jds = {};
  ips.forEach((ip) => {
    const jd = ip - ol;
    ol = ip;
    if (typeof jds[jd] === "undefined") {
      jds[jd] = 0;
    }
    jds[jd] += 1;
  });
  console.log(jds);
  console.log(jds["1"] * jds["3"]);
};

const checkValid = (list) => {
  let ol = 0;
  for (let i = 0; i < list.length; i++) {
    const ip = list[i];
    const jd = ip - ol;
    ol = ip;
    if (jd > 3) {
      return false;
    }
  }
  return true;
};

let resultSet = [];

const findPattern = (list) => {
  if (checkValid(list)) {
    if (!resultSet.includes(list.join(""))) {
      resultSet = [...resultSet, list.join("")];
    }
    for (let i = 1; i < list.length - 1; i++) {
      const newList = [...list.slice(0, i - 1), ...list.slice(i)];
      if (checkValid(newList)) {
        findPattern(newList);
      }
    }
  }
};

const part2 = () => {
  let ips = [...inputs];
  ips = [...ips, Math.max(...ips) + 3].sort((a, b) => a - b);
  findPattern(ips);
  console.log(resultSet.length);
};

// part1();
part2();
