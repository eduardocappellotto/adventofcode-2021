const fs = require("fs");

async function partOne() {
  let commands;
  try {
    commands = fs.readFileSync("./input.txt", "utf8").split("\r\n");
    console.log(commands);
  } catch (err) {
    console.error(err);
  }
  let xPosition = 0,
    yPosition = 0;

  for (let index = 0; index < commands.length; index++) {
    let direction = commands[index].split(" ")[0];
    let steps = commands[index].split(" ").map(Number)[1];

    console.log(direction, steps);

    if (direction === "forward") {
      xPosition += steps;
    }
    if (direction === "down") {
      yPosition = yPosition + steps;
    }
    if (direction === "up") {
      yPosition = yPosition - steps;
    }
  }
}

async function partTwo() {
  let commands;
  try {
    commands = fs.readFileSync("./input.txt", "utf8").split("\r\n");
    console.log(commands);
  } catch (err) {
    console.error(err);
  }
  let xPosition = 0,
    yPosition = 0;
  aim = 0;

  for (let index = 0; index < commands.length; index++) {
    let direction = commands[index].split(" ")[0];
    let steps = commands[index].split(" ").map(Number)[1];

    console.log(direction, steps, aim);

    if (direction === "forward") {
      xPosition = xPosition + steps;
      yPosition = yPosition + aim * steps;
    }
    if (direction === "down") {
      aim = aim + steps;
    }
    if (direction === "up") {
      aim = aim - steps;
    }
  }

  console.log(
    "X:",
    xPosition,
    " Y:",
    yPosition,
    "X x Y = ",
    xPosition * yPosition
  );
}
partOne();
// partTwo();
