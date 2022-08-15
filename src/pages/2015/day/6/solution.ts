import { lines } from "../../../../utils/helpers";

export const part1 = (input: string): number => {
  const lights: any = {};
  lines(input).forEach((line) => {
    let current = line;
    if (line.startsWith("turn ")) {
      current = line.slice(5);
    }
    const [first, br] = current.split(" through ");
    const [action, tl] = first.split(" ");
    const [x1, y1] = tl.split(",").map((x) => parseInt(x));
    const [x2, y2] = br.split(",").map((x) => parseInt(x));
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        switch (action) {
          case "on":
            lights[`${x},${y}`] = true;
            break;
          case "off":
            lights[`${x},${y}`] = false;
            break;
          case "toggle":
            lights[`${x},${y}`] = !lights[`${x},${y}`];
            break;
          default:
            break;
        }
      }
    }
  });
  return Object.values(lights).filter((value) => value).length;
};
export const part2 = (input: string): number => {
  const lights: { [key: string]: number } = {};
  lines(input).forEach((line) => {
    let current = line;
    if (line.startsWith("turn ")) {
      current = line.slice(5);
    }
    const [first, br] = current.split(" through ");
    const [action, tl] = first.split(" ");
    const [x1, y1] = tl.split(",").map((x) => parseInt(x));
    const [x2, y2] = br.split(",").map((x) => parseInt(x));

    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        let brightness = lights[`${x},${y}`];
        switch (action) {
          case "on":
            brightness = brightness ? (brightness += 1) : 1;
            break;
          case "off":
            brightness = brightness
              ? (brightness = Math.max((brightness -= 1), 0))
              : 0;
            break;
          case "toggle":
            brightness = brightness ? (brightness += 2) : 2;
            break;
          default:
            break;
        }
        lights[`${x},${y}`] = brightness;
      }
    }
  });
  return Object.values(lights).reduce((acc, curr) => acc + curr, 0);
};
