const fs = require("fs");
const path = require("path");

function readFileSync(p) {
  let data = "";
  try {
    data = fs.readFileSync(path.resolve(__dirname, "../" + p), "utf8");
  } catch (err) {
    console.error(err);
  }
  return data;
}

exports.readFileSync = readFileSync;
