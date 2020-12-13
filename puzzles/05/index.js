const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/05/input.txt", "utf8")
  .split("\n")
  .map((input) => input.split(""));

const part1 = () => {
  let max = 0;
  inputs.forEach((input) => {
    let row = { min: 0, max: 127 };
    let col = { min: 0, max: 7 };
    input.forEach((i) => {
      switch (i) {
        case "F":
          row.max = Math.floor((row.min + row.max) / 2);
          break;
        case "B":
          row.min = Math.ceil((row.min + row.max) / 2);
          break;
        case "L":
          col.max = Math.floor((col.min + col.max) / 2);
          break;
        case "R":
          col.min = Math.ceil((col.min + col.max) / 2);
          break;

        default:
          break;
      }
    });
    if (row.min * 8 + col.min > max) {
      max = row.min * 8 + col.min;
    }
  });
  console.log(max);
};

const part2 = () => {
  let seats = {};
  let missing = [];
  inputs.forEach((input) => {
    let row = { min: 0, max: 127 };
    let col = { min: 0, max: 7 };
    input.forEach((i) => {
      switch (i) {
        case "F":
          row.max = Math.floor((row.min + row.max) / 2);
          break;
        case "B":
          row.min = Math.ceil((row.min + row.max) / 2);
          break;
        case "L":
          col.max = Math.floor((col.min + col.max) / 2);
          break;
        case "R":
          col.min = Math.ceil((col.min + col.max) / 2);
          break;

        default:
          break;
      }
    });
    if (typeof seats[col.min] === "undefined") {
      seats[col.min] = [];
    }
    seats[col.min] = [...seats[col.min], row.min];
  });
  let ids = [];
  let missSeats = [];
  for (const col in seats) {
    ids = [...ids, ...seats[col].map((row) => +row * 8 + +col)];
    missSeats = [
      ...missSeats,
      [...Array(128).keys()].filter((num) => !seats[col].includes(num)),
    ];
  }

  // check missing seat id
  let result = [];
  missSeats.forEach((ms, col) => {
    ms.forEach((row) => {
      const missId = row * 8 + col;
      if (ids.includes(missId - 1) && ids.includes(missId + 1)) {
        result.push(missId);
      }
    });
  });
  console.log(result);
};

// part1();
part2();
