import { lines } from "../../../../utils/helpers";

const keypad: KeyPad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const part2Keypad: KeyPad = [
  ["", "", 1, "", ""],
  ["", 2, 3, 4, ""],
  [5, 6, 7, 8, 9],
  ["", "A", "B", "C", ""],
  ["", "", "D", "", ""],
];
const getKey = ([x, y]: Key, keypad: KeyPad): number | string => {
  return keypad[y][x];
};

type KeyPad = (number | string)[][];
type Instruction = "U" | "D" | "L" | "R";
type Key = [x: number, y: number];

const checkMove = (currentKey: Key, newKey: Key, keypad: KeyPad): Key => {
  try {
    const key = getKey(newKey, keypad);
    if (key) {
      return newKey;
    } else {
      return currentKey;
    }
  } catch {
    return currentKey;
  }
};

const move = (instruction: Instruction, key: Key, keypad: KeyPad): Key => {
  const [x, y] = key;
  let newKey: Key;
  switch (instruction) {
    case "U":
      newKey = [x, y - 1];
      return checkMove([x, y], newKey, keypad);
    case "D":
      newKey = [x, y + 1];
      return checkMove([x, y], newKey, keypad);
    case "L":
      newKey = [x - 1, y];
      return checkMove([x, y], newKey, keypad);
    case "R":
      newKey = [x + 1, y];
      return checkMove([x, y], newKey, keypad);
  }
};

export const part1 = (input: string) => {
  let currentButton: Key = [1, 1];
  let code = "";
  for (const line of lines(input)) {
    for (const instruction of line.split("")) {
      currentButton = move(instruction as Instruction, currentButton, keypad);
    }
    code += getKey(currentButton, keypad);
  }
  return code;
};
export const part2 = (input: string) => {
  let currentButton: Key = [0, 2];
  let code = "";
  for (const line of lines(input)) {
    for (const instruction of line.split("")) {
      currentButton = move(instruction as Instruction, currentButton, part2Keypad);
    }
    code += getKey(currentButton, part2Keypad);
  }
  return code;
};
