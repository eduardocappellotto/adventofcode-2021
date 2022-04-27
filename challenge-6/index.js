const fs = require("fs");

async function partTwo() {
  let fishes = [];
  let max_days = 256;

  try {
    fishes = fs
      .readFileSync("./input.txt", "utf8")
      .split(",")
      .map((n) => Number(n));
  } catch (err) {
    console.error(err);
  }

  let ageGroups = Array.from({ length: 9 }, () => 0);

  fishes.forEach((age) => (ageGroups[age] += 1));

  for (let index = 0; index < max_days; index++) {
    let ageGroupsFromToday = Array.from({ length: 9 }, () => 0);
    ageGroupsFromToday[6] = ageGroups[0];
    ageGroupsFromToday[8] = ageGroups[0];
    for (let age = 1; age < 9; age++) {
      ageGroupsFromToday[age - 1] += ageGroups[age];
    }
    ageGroups = ageGroupsFromToday;

    console.log(
      "Dia " + (index + 1) + " :" + ageGroups.reduce((a, b) => a + b)
    );
  }

  const answer = ageGroups.reduce((a, b) => a + b);
}

async function partOne() {
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

// partOne();
partTwo();
