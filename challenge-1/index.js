const fs = require("fs");

async function partOne() {
  let dephts;
  try {
    dephts = fs.readFileSync("./input.txt", "utf8").split("\r\n").map(Number);
    console.log(dephts);
  } catch (err) {
    console.error(err);
  }
  let increased = 0;

  for (let index = 1; index < dephts.length; index++) {
    if (dephts[index] > dephts[index - 1]) {
      console.log(dephts[index], dephts[index - 1], "increased");
      increased++;
    } else {
      console.log(dephts[index], dephts[index - 1]);
    }
  }

  console.log(increased);
}
partOne();

async function partTwo() {
  let dephts;
  try {
    dephts = fs.readFileSync("./input.txt", "utf8").split("\r\n").map(Number);
    console.log(dephts);
  } catch (err) {
    console.error(err);
  }
  let increased = 0;

  for (let index = 1; index < dephts.length; index++) {
    if (dephts[index] > dephts[index - 1]) {
      console.log(dephts[index], dephts[index - 1], "increased");
      increased++;
    } else {
      console.log(dephts[index], dephts[index - 1]);
    }
  }

  console.log(increased);
}
// partOne();
partTwo();
