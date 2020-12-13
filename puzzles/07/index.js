const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/07/input.txt", "utf8").split("\n");
// console.log(inputs);

const part1 = () => {
  let check = ["shiny gold bags"];
  let checked = [];
  while (check.length > 0) {
    inputs.forEach((input) => {
      const match = `${check[0]}?`;
      const re = new RegExp(match, "g");
      const bag = input.split("contain");

      if (bag[1].match(re)) {
        bag[0] = bag[0].trim();
        if (!checked.includes(bag[0])) {
          check = [...check, bag[0]];
          checked = [...checked, bag[0]];
        }
      }
    });
    check.shift();
  }
  console.log(checked);
  console.log(checked.length);
};

const find = (name, list, c) => {
  for (let i = 0; i < list.length; i++) {
    const match = `${name}?`;
    const re = new RegExp(match, "g");
    if (list[i][0].match(re)) {
      let total = 0;
      for (let j = 0; j < list[i][1].length; j++) {
        const bag = list[i][1][j];
        const count = bag.substring(0, 1).trim();
        const bagName = bag.substring(2).trim();

        if (count.match(/[0-9]/g)) {
          total += find(bagName, list, +count);
        } else {
          return +c;
        }
      }

      return total * (c === 0 ? 1 : c) + c;
    }
  }
};

const part2 = () => {
  let check = ["shiny gold bags"];
  let checked = [];
  while (check.length > 0) {
    inputs.forEach((input) => {
      const match = `${check[0]}?`;
      const re = new RegExp(match, "g");
      const bag = input.split("contain");

      if (bag[0].match(re)) {
        bag[1] = bag[1]
          .replace(".", "")
          .split(",")
          .map((b) => b.trim());

        let count = 0;
        checked.forEach((c) => {
          if (c[0] === bag[0].trim()) {
            count++;
          }
        });
        if (count === 0) {
          checked = [...checked, [bag[0].trim(), bag[1]]];
        }

        bag[1].forEach((b) => {
          const name = b.substring(2);
          const match = `${name}?`;
          const re = new RegExp(match, "g");
          if (!checked.includes(re) && !name.match(/other bags?/g)) {
            check = [...check, name];
          }
        });
      }
    });
    check.shift();
  }

  // console.log(checked);

  const t = find("shiny gold bags", checked, 0);
  console.log(t);
};

// part1();
part2();
