const fs = require("fs");

async function challenge() {
  let fishes = [];
  let day = 1;
  let max_days = 80;

  try {
    fishes = fs.readFileSync("./input.txt", "utf8").split(",").map(Number);
    console.log(fishes);
  } catch (err) {
    console.error(err);
  }

  while (day <= max_days) {
    let newbaby = 0;
    fishes = fishes.map((fish) => {
      if (fish > 0) {
        return fish - 1;
      } else if (fish === 0) {
        newbaby++;
        return 6;
      }
    });

    for (var i = 0; i < newbaby; i++) fishes.push(8);

    console.log("Resultado dia " + day + " : " + fishes.length);
    day++;
  }
}

challenge();
