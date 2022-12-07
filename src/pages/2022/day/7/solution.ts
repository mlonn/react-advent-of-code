import { lines } from "../../../../utils/helpers";

interface Dir {
  files: { [key: string]: number };
  dirs: { [key: string]: Dir };
  name: string;
  parent: Dir | undefined;
}
const TOTAL_SPACE = 70000000;
const UPDATE_SIZE = 30000000;
function parse(input: string) {
  let currentDir: Dir | undefined = undefined;
  let root: Dir | undefined = undefined;
  for (const line of lines(input)) {
    if (line.startsWith("$")) {
      const cmd = line.replace("$ ", "");
      if (cmd.startsWith("cd")) {
        const [, name] = cmd.split(" ");
        if (name === "..") {
          if (currentDir?.parent) {
            currentDir = currentDir.parent;
          }
        } else {
          if (!currentDir) {
            currentDir = {
              name: "/",
              files: {},
              parent: undefined,
              dirs: {},
            };
            root = currentDir;
          } else {
            currentDir = currentDir.dirs[name];
          }
        }
      }
    } else if (currentDir) {
      const file = line.match(/(\d+) (.*)/);
      const dir = line.match(/dir (.*)/);
      if (file) {
        const [, size, filename] = file;
        currentDir.files[filename] = parseInt(size);
      }
      if (dir) {
        const [, name] = dir;
        currentDir.dirs[name] = {
          name: name,
          files: {},
          parent: currentDir,
          dirs: {},
        };
      }
    }
  }
  if (!root) throw new Error("Failed to parse");
  return root;
}
const getSize = (dir: Dir) => {
  let size = Object.values(dir.files).reduce((acc, curr) => acc + curr, 0);
  size += Object.values(dir.dirs).reduce((acc, curr) => acc + getSize(curr), 0);
  return size;
};
export const part1 = (input: string) => {
  const root = parse(input);
  let totalSize = 0;
  const findTotalSmaller = (dir: Dir) => {
    let size = getSize(dir);
    if (size <= 100000) {
      totalSize += size;
    }
    for (const inner of Object.values(dir.dirs)) {
      findTotalSmaller(inner);
    }
  };
  findTotalSmaller(root);
  return totalSize;
};
export const part2 = (input: string) => {
  const root = parse(input);
  let smallest = Infinity;
  const findDirSizeToRemove = (dir: Dir, spaceNeeded: number) => {
    let size = getSize(dir);
    if (size > spaceNeeded && size < smallest) {
      smallest = size;
    }
    for (const inner of Object.values(dir.dirs)) {
      findDirSizeToRemove(inner, spaceNeeded);
    }
  };

  const totalSize = getSize(root);
  const needed = UPDATE_SIZE - (TOTAL_SPACE - totalSize);
  findDirSizeToRemove(root, needed);
  return smallest;
};
