import { lcm, lines } from "../../../../utils/helpers";

interface Monkey {
  items: number[];
  operation: string[];
  test: number;
  t: number;
  f: number;
  inspected: number;
}

export const part1 = (input: string) => {
  const monkeys = parseMonkeys(input);

  for (let i = 0; i < 20; i++) {
    for (const monkey of monkeys) {
      const amount = monkey.items.length;
      for (let j = 0; j < amount; j++) {
        monkey.inspected++;
        const item = monkey.items.pop();
        if (item) {
          let n = item;
          const value = monkey.operation[1];
          switch (monkey.operation[0]) {
            case "+":
              if (value === "old") {
                n += item;
              } else {
                n += parseInt(value);
              }
              break;
            case "-":
              if (value === "old") {
                n -= item;
              } else {
                n -= parseInt(value);
              }
              break;
            case "/":
              if (value === "old") {
                n /= item;
              } else {
                n /= parseInt(value);
              }
              break;
            case "*":
              if (value === "old") {
                n *= item;
              } else {
                n *= parseInt(value);
              }
              break;
          }
          n = Math.floor(n / 3);
          if (n % monkey.test === 0) {
            monkeys[monkey.t].items.push(n);
          } else {
            monkeys[monkey.f].items.push(n);
          }
        }
      }
    }
  }
  let max = [];
  for (const monkey of monkeys) {
    max.push(monkey.inspected);
  }
  max = max.sort((a, b) => b - a);
  return max[0] * max[1];
};

function parseMonkeys(input: string) {
  const monkeys: Monkey[] = [];
  input.split("\n\n").forEach((monkey) => {
    const m = lines(monkey);
    monkeys.push({
      items: m[1]
        .replace("Starting items: ", "")
        .split(",")
        .map((i) => parseInt(i))
        .reverse(),
      operation: m[2].replace("  Operation: new = old ", "").split(" "),
      test: parseInt(m[3].replace("Test: divisible by ", "")),
      t: parseInt(m[4].replace("If true: throw to monkey ", "")),
      f: parseInt(m[5].replace("If false: throw to monkey ", "")),
      inspected: 0,
    });
  });
  return monkeys;
}

export const part2 = (input: string) => {
  const monkeys = parseMonkeys(input);

  let testLcm = 1;
  for (const monkey of monkeys) {
    testLcm = lcm(testLcm, monkey.test);
  }

  for (let i = 0; i < 10000; i++) {
    for (const monkey of monkeys) {
      const amount = monkey.items.length;
      for (let j = 0; j < amount; j++) {
        monkey.inspected++;
        const item = monkey.items.pop();

        if (item) {
          let n = item;
          const value = monkey.operation[1];
          switch (monkey.operation[0]) {
            case "+":
              if (value === "old") {
                n = n + item;
              } else {
                n = n + parseInt(value);
              }
              break;
            case "-":
              if (value === "old") {
                n = n - item;
              } else {
                n = n - parseInt(value);
              }
              break;
            case "/":
              if (value === "old") {
                n = n / item;
              } else {
                n = n / parseInt(value);
              }
              break;
            case "*":
              if (value === "old") {
                n = n * item;
              } else {
                n = n * parseInt(value);
              }
              break;
          }
          n = n % testLcm;
          if (n % monkey.test === 0) {
            monkeys[monkey.t].items.push(n);
          } else {
            monkeys[monkey.f].items.push(n);
          }
        }
      }
    }
  }
  let max = [];
  for (const monkey of monkeys) {
    max.push(monkey.inspected);
  }
  max = max.sort((a, b) => b - a);
  console.log(max);
  return max[0] * max[1];
};
