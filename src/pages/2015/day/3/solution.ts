export const part1 = (input: string): number => {
  const houses: any = {};
  let sx = 0;
  let sy = 0;
  houses[`0:0`] = 1;
  input.split("").forEach((instruction) => {
    switch (instruction) {
      case "^":
        sy -= 1;
        break;
      case "v":
        sy += 1;
        break;
      case ">":
        sx += 1;
        break;
      case "<":
        sx -= 1;
        break;
    }
    const house = houses[`${sx}:${sy}`];
    houses[`${sx}:${sy}`] = house ? house + 1 : 1;
  });
  return Object.keys(houses).length;
};

export const part2 = (input: string): number => {
  const houses: any = {};
  let sx = 0;
  let sy = 0;
  let rx = 0;
  let ry = 0;
  houses[`0:0`] = 2;
  input.split("").forEach((instruction, index) => {
    const isRobot = index % 2 === 0;

    switch (instruction) {
      case "^":
        isRobot ? (ry -= 1) : (sy -= 1);
        break;
      case "v":
        isRobot ? (ry += 1) : (sy += 1);
        break;
      case ">":
        isRobot ? (rx += 1) : (sx += 1);
        break;
      case "<":
        isRobot ? (rx -= 1) : (sx -= 1);
        break;
    }
    const santaHouse = houses[`${sx}:${sy}`];
    const robotHouse = houses[`${rx}:${ry}`];
    houses[`${sx}:${sy}`] = santaHouse ? santaHouse + 1 : 1;
    houses[`${rx}:${ry}`] = robotHouse ? robotHouse + 1 : 1;
  });

  return Object.keys(houses).length;
};
