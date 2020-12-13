const { readFileSync } = require("../../services/utils");

const inputs = readFileSync("./puzzles/08/input.txt", "utf8").split("\n");
// console.log(inputs);

const part1 = () => {
  let i = 0;
  let acc = 0;
  let checked = [];
  while (true) {
    if (checked.includes(i)) {
      break;
    }

    const ins = inputs[i].split(" ");
    const opt = ins[0];
    const cmd = ins[1];
    console.log(ins);
    switch (opt) {
      case "nop":
        i++;
        break;
      case "acc":
        acc += +cmd;
        i++;
        break;
      case "jmp":
        i += +cmd;
        break;

      default:
        break;
    }
    checked = [...checked, i - 1];
  }
  console.log(acc);
};

const checkIps = (ips) => {
  let i = 0;
  let acc = 0;
  let checked = [];
  while (true) {
    if (checked.includes(i)) {
      return { valid: false, acc: acc };
    } else if (i === ips.length) {
      return { valid: true, acc: acc };
    }

    const ins = ips[i].split(" ");
    const opt = ins[0];
    const cmd = ins[1];
    checked = [...checked, i];
    switch (opt) {
      case "nop":
        i++;
        break;
      case "acc":
        acc += +cmd;
        i++;
        break;
      case "jmp":
        i += +cmd;
        break;
      default:
        break;
    }
  }
};

const part2 = () => {
  for (let i = 0; i < inputs.length; i++) {
    const ips = [...inputs];
    let check = { valid: false };
    if (ips[i].match(/nop/g)) {
      ips[i] = ips[i].replace(/nop/g, "jmp");
      check = checkIps(ips);
    } else if (ips[i].match(/jmp/g)) {
      ips[i] = ips[i].replace(/jmp/g, "nop");
      check = checkIps(ips);
    }

    if (check.valid) {
      console.log(check.acc);
    }
  }
};

// part1();
part2();
