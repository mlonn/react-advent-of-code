import { lines } from "../../../../utils/helpers";

const width = 50;
const height = 6;
const printScreen = (screen: boolean[][]): string => {
  let result = "";
  for (let y = 0; y < screen.length; y++) {
    const row = screen[y];
    let printRow = "";
    for (let x = 0; x < row.length; x++) {
      if (screen[y][x]) {
        printRow += "#";
      } else {
        printRow += " ";
      }
    }
    result += `${printRow}\n`;
    console.log(printRow);
  }
  return result;
};
const rotateColumn = (screen: boolean[][], column: number, amount: number): boolean[][] => {
  const newScreen = copyScreen(screen);

  for (let y = 0; y < screen.length; y++) {
    const row = screen[y];
    for (let x = 0; x < row.length; x++) {
      if (x === column) {
        const index = (newScreen.length + y - amount) % newScreen.length;
        newScreen[y][x] = screen[index][x];
      }
    }
  }
  return newScreen;
};

function copyScreen(screen: boolean[][]) {
  const newScreen: boolean[][] = [];
  for (let y = 0; y < screen.length; y++) {
    newScreen[y] = Array(screen[y].length);
    for (let x = 0; x < screen[y].length; x++) {
      newScreen[y][x] = screen[y][x];
    }
  }
  return newScreen;
}

const rotateRow = (screen: boolean[][], rowIndex: number, amount: number): boolean[][] => {
  const newScreen = copyScreen(screen);
  for (let y = 0; y < screen.length; y++) {
    if (y === rowIndex) {
      const row = screen[y];
      for (let x = 0; x < row.length; x++) {
        const index = (row.length + x - amount) % row.length;
        newScreen[y][x] = screen[y][index];
      }
    }
  }
  return newScreen;
};

function lightScreen(input: string) {
  let screen: boolean[][] = Array(height);
  for (let i = 0; i < screen.length; i++) {
    screen[i] = Array(width).fill(false);
  }
  lines(input).forEach((line) => {
    const rect = line.match(/rect (\d*)x(\d*)/);
    if (rect) {
      const [, a, b] = rect;
      for (let y = 0; y < +b; y++) {
        for (let x = 0; x < +a; x++) {
          screen[y][x] = true;
        }
      }
    }
    const column = line.match(/rotate column x=(\d*) by (\d*)/);
    if (column) {
      const [, index, amount] = column;
      screen = rotateColumn(screen, +index, +amount);
    }
    const row = line.match(/rotate row y=(\d*) by (\d*)/);
    if (row) {
      const [, index, amount] = row;
      screen = rotateRow(screen, +index, +amount);
    }
  });
  return screen;
}

export const part1 = (input: string) => {
  let screen = lightScreen(input);

  let lit = 0;
  for (let y = 0; y < screen.length; y++) {
    for (let x = 0; x < screen[y].length; x++) {
      if (screen[y][x]) {
        lit++;
      }
    }
  }
  printScreen(screen);
  return lit;
};
export const part2 = (input: string) => {
  const screen = lightScreen(input);
  return <pre>{printScreen(screen)}</pre>;
};
