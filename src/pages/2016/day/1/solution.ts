enum Direction {
  N = 0,
  E = 90,
  S = 180,
  W = 270,
}
const parseInstruction = (instruction: string) => {
  const match = instruction.match(/([LR])(\d*)/);
  if (match) {
    const [, direction, distance] = match;
    return { direction, distance: +distance };
  }
  throw new Error("Faulty Instruction");
};

function step(instruction: string, currentDirection: Direction, position: { x: number; y: number }): [{ x: number; y: number }, Direction] {
  return [position, currentDirection];
}

export const part1 = (input: string) => {
  let position = { x: 0, y: 0 };
  let currentDirection = Direction.N;
  for (let instruction of input.split(", ")) {
    const { direction, distance } = parseInstruction(instruction);
    if (direction === "R") {
      currentDirection = (currentDirection + 90) % 360;
    }
    if (direction === "L") {
      currentDirection = (currentDirection - 90 + 360) % 360;
    }
    switch (currentDirection) {
      case Direction.N:
        position.y -= distance;
        break;
      case Direction.E:
        position.x += distance;
        break;
      case Direction.S:
        position.y += distance;
        break;
      case Direction.W:
        position.x -= distance;
        break;
    }
  }
  return Math.abs(position.x) + Math.abs(position.y);
};

export const part2 = (input: string) => {
  let position = { x: 0, y: 0 };
  let currentDirection = Direction.N;
  const visited: { [key: string]: boolean } = {};
  for (let instruction of input.split(", ")) {
    const { direction, distance } = parseInstruction(instruction);
    if (direction === "R") {
      currentDirection = (currentDirection + 90) % 360;
    }
    if (direction === "L") {
      currentDirection = (currentDirection - 90 + 360) % 360;
    }
    switch (currentDirection) {
      case Direction.N:
        for (let i = 0; i < distance; i++) {
          position.y -= 1;
          const key = `${position.x}${position.y}`;
          if (visited[key]) {
            return Math.abs(position.x) + Math.abs(position.y);
          } else {
            visited[key] = true;
          }
        }
        break;
      case Direction.E:
        for (let i = 0; i < distance; i++) {
          position.x += 1;
          const key = `${position.x}${position.y}`;
          if (visited[key]) {
            return Math.abs(position.x) + Math.abs(position.y);
          } else {
            visited[key] = true;
          }
        }
        break;
      case Direction.S:
        for (let i = 0; i < distance; i++) {
          position.y += 1;
          const key = `${position.x}${position.y}`;
          if (visited[key]) {
            return Math.abs(position.x) + Math.abs(position.y);
          } else {
            visited[key] = true;
          }
        }
        break;
      case Direction.W:
        for (let i = 0; i < distance; i++) {
          position.x -= 1;
          const key = `${position.x}${position.y}`;
          if (visited[key]) {
            return Math.abs(position.x) + Math.abs(position.y);
          } else {
            visited[key] = true;
          }
        }
        break;
    }
  }
  throw new Error("no place twice");
};
