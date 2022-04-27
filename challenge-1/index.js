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

  console.log("Aumentos:", increased);
}

async function partTwo() {
  let dephts;
  try {
    dephts = fs.readFileSync("./input.txt", "utf8").split("\r\n").map(Number);
  } catch (err) {
    console.error(err);
  }
  let increased = 0;

  let sums = dephts.map((depth, index) => {
    if (dephts[index + 1] && dephts[index + 2]) {
      return dephts[index] + dephts[index + 1] + dephts[index + 2];
    }
  });

  for (let index = 1; index < sums.length - 2; index++) {
    if (sums[index] > sums[index - 1]) {
      increased++;
    }
  }

  console.log("Aumentos:", increased);
}
// partOne();
partTwo();
