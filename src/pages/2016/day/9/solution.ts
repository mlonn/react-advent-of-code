export const part1 = (input: string) => {
  return decompressedLength(decompress([{ chars: input, amount: 1 }]));
};

function decompress(list: { chars: string; amount: number }[]) {
  let decompressed = [];
  for (let i = 0; i < list.length; i++) {
    const input = list[i].chars;
    const amount = list[i].amount;
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (char === "(") {
        const match = input.slice(i, i + 10).match(/\((\d*)x(\d*)\)/);
        if (match) {
          const [marker, numberOfChars, times] = match;
          const r = new RegExp(`\\(\\d*x\\d*\\)(.{${numberOfChars}})`);
          const chars = input.slice(i, i + +marker.length + +numberOfChars).match(r);
          if (chars) {
            const [d, c] = chars;
            decompressed.push({ chars: c, amount: +times * amount });
            i += d.length - 1;
          }
        }
      } else {
        decompressed.push({ chars: char, amount });
      }
    }
  }
  return decompressed;
}

function decompressedLength(current: { amount: number; chars: string }[]) {
  let totalLength = 0;
  for (let i = 0; i < current.length; i++) {
    totalLength += current[i].chars.length * current[i].amount;
  }
  return totalLength;
}

export const part2 = (input: string) => {
  let current = [{ chars: input, amount: 1 }];
  while (current.some(({ chars }) => chars.includes("("))) {
    current = decompress(current);
  }
  let totalLength = decompressedLength(current);
  return totalLength;
};
