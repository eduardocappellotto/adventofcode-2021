const fs = require("fs");

async function partOne() {
  let numbers;
  try {
    numbers = fs.readFileSync("./input.txt", "utf8").split("\r\n");
  } catch (err) {
    console.error(err);
  }

  let bitsLength = numbers[0].length;
  let oneCounts = Array(bitsLength).fill(0);
  let zeroCounts = Array(bitsLength).fill(0);

  for (let index = 0; index < numbers.length; index++) {
    for (let bitIndex = 0; bitIndex < bitsLength; bitIndex++) {
      let input = numbers[index].split("")[bitIndex];

      input === "1" ? (oneCounts[bitIndex] += 1) : (zeroCounts[bitIndex] += 1);
    }
  }

  let gammaRate = "",
    epsilonNumber = "";

  for (let index = 0; index < oneCounts.length; index++) {
    if (oneCounts[index] > zeroCounts[index]) {
      gammaRate += "1";
      epsilonNumber += "0";
    } else {
      gammaRate += "0";
      epsilonNumber += "1";
    }
  }

  return console.log(parseInt(gammaRate, 2) * parseInt(epsilonNumber, 2));
}

partOne();
