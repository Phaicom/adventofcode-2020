const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/04/input.txt", "utf8")
  .split(/\n{2,}/g)
  .map((input) => input.replace(/\n/g, " ").split(" "));

const part1 = () => {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let isValids = 0;
  inputs.forEach((input) => {
    const filter = input.filter((rule) =>
      required.includes(rule.split(":")[0])
    );
    if (filter.length === required.length) {
      isValids++;
    }
  });
  console.log(isValids);
};

const part2 = () => {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let isValids = 0;
  inputs.forEach((input) => {
    const filter = input.filter((rule) => {
      const key = rule.split(":")[0];
      const value = rule.split(":")[1];

      switch (key) {
        case "byr":
          if (value.length === 4 && +value >= 1920 && +value <= 2002) {
            return input;
          }
          break;
        case "iyr":
          if (value.length === 4 && +value >= 2010 && +value <= 2020) {
            return input;
          }
          break;
        case "eyr":
          if (value.length === 4 && +value >= 2020 && +value <= 2030) {
            return input;
          }
          break;
        case "hgt":
          const num = value.replace("cm", "").replace("in", "");
          if (value.indexOf("cm") > -1 && num >= 150 && num <= 193) {
            return input;
          } else if (value.indexOf("in") > -1 && num >= 59 && num <= 76) {
            return input;
          }
          break;
        case "hcl":
          if (
            value.match(/^#[a-f0-9]+$/g) &&
            value.replace("#", "").length === 6
          ) {
            return value;
          }
          break;
        case "ecl":
          const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
          if (eyeColors.includes(value)) {
            return value;
          }
          break;
        case "pid":
          if (value.length === 9 && value.match(/^[0-9]+$/g)) {
            return value;
          }
          break;

        default:
          break;
      }
    });
    if (filter.length === required.length) {
      isValids++;
    }
    console.log(filter);
  });
  console.log(isValids);
};

// part1();
part2();
