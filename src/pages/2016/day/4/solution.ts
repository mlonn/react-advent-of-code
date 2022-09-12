import { lines } from "../../../../utils/helpers";

const getChecksum = (name: string): string => {
  const clean = name.replaceAll("-", "");
  const map: { [key: string]: number } = {};
  for (const letter of clean) {
    if (map[letter]) {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  }
  return Object.entries(map)
    .sort(([al, af], [bl, bf]) => {
      if (af === bf) {
        return al.localeCompare(bl);
      }
      return bf - af;
    })
    .map(([l]) => l)
    .slice(0, 5)
    .join("");
};
interface Line {
  name: string;
  id: number;
  checksum: string;
}

function getValidRooms(input: string) {
  return lines(input)
    .reduce((acc, room) => {
      const match = room.match(/([a-z]+[-[a-z]+]*)-(\d+)\[([a-z]*)]/);
      if (match) {
        const [, name, id, checksum] = match;
        const line: Line = { name, id: +id, checksum };
        return [...acc, line];
      }
      return acc;
    }, [] as Line[])
    .filter(({ name, id, checksum }) => {
      return getChecksum(name) === checksum;
    });
}

export const part1 = (input: string) => {
  return getValidRooms(input).reduce((p, c) => p + c.id, 0);
};
export const part2 = (input: string) => {
  const rooms = getValidRooms(input)
    .map(({ name, id }) => {
      let newName = "";
      for (const letter of name) {
        if (letter === "-") {
          newName += " ";
        } else {
          newName += String.fromCharCode(97 + ((letter.charCodeAt(0) + id - 97) % 26));
        }
      }
      return { name: newName, id };
    })
    .filter((v) => v.name === "northpole object storage");
  console.log(rooms);
  return rooms[0].id;
};
