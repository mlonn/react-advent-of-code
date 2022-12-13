type Packet = number | Packet[];

function compare(left: Packet, right: Packet): number {
  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  }

  if (typeof left === "number") {
    return compare([left], right);
  }

  if (typeof right === "number") {
    return compare(left, [right]);
  }

  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    const v = compare(left[i], right[i]);
    if (v !== 0) {
      return v;
    }
  }
  return left.length - right.length;
}

export const part1 = (input: string) => {
  let sum = 0;
  input.split("\n\n").forEach((pair, index) => {
    const [a, b] = pair.split("\n");
    const left = JSON.parse(a);
    const right = JSON.parse(b);
    if (compare(left, right) < 0) {
      sum += index + 1;
    }
  });
  return sum;
};
export const part2 = (input: string) => {
  const packets: Packet = [];
  input.split("\n\n").forEach((pair, index) => {
    const [a, b] = pair.split("\n");
    const left = JSON.parse(a);
    const right = JSON.parse(b);
    packets.push(left, right);
  });
  const two = [[2]];
  const six = [[6]];
  packets.push(two, six);
  packets.sort((a, b) => compare(a, b));
  let prod = 1;

  for (let i = 0; i < packets.length; i++) {
    const p = packets[i] as any;
    if (p === two) {
      prod *= i + 1;
    }
    if (p === six) {
      prod *= i + 1;
    }
  }

  return prod;
};
