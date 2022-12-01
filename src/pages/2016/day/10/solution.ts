import { lines } from "../../../../utils/helpers";

interface Bot {
  number: number;
  numbers: number[];
}

interface Instruction {
  type: string;
  value: number;
}
const giveValueToBot = (value: number, bot: Bot) => {
  if (bot.numbers.length < 2) {
    bot.numbers.push(value);
  } else {
    throw new Error("bot can only hold two numbers");
  }
};
const getNumbers = (bot: Bot): { highValue: number; lowValue: number } => {
  if (bot.numbers.length !== 2) {
    throw new Error("no number in bot");
  }
  const [a, b] = bot.numbers;

  if (a > b) {
    return { highValue: a, lowValue: b };
  }
  if (b > a) {
    return { highValue: b, lowValue: a };
  }
  console.log(bot.numbers);
  throw new Error("illegal");
};
const isWinner = (bot: Bot) => {
  try {
    return bot.numbers.includes(61) && bot.numbers.includes(17);
  } catch (e) {
    return false;
  }
};

function parse(input: string) {
  const bots: { [key: string]: Bot } = {};
  const instructions: { [key: string]: { low: Instruction; high: Instruction } } = {};
  let current = lines(input);
  for (const line of current) {
    const valueMatch = line.match(/value (\d*) goes to bot (\d*)/);
    if (valueMatch) {
      const [, value, botnumber] = valueMatch;
      if (bots[botnumber]) {
        giveValueToBot(+value, bots[botnumber]);
      } else {
        const bot: Bot = { numbers: [], number: +botnumber };
        giveValueToBot(+value, bot);
        bots[botnumber] = bot;
      }
    }
    const botMatch = line.match(/bot (\d*) gives low to (bot|output) (\d*) and high to (bot|output) (\d*)/);
    if (botMatch) {
      const [, giverNumber, lowBotOrOutput, lowNumer, highBotOrOutput, highNumer] = botMatch;
      instructions[giverNumber] = {
        low: { type: lowBotOrOutput, value: +lowNumer },
        high: { type: highBotOrOutput, value: +highNumer },
      };
    }
  }
  return { bots, instructions };
}

export const part1 = (input: string) => {
  const { bots, instructions } = parse(input);
  while (true) {
    const botsWith2 = Object.values(bots).filter((value) => value.numbers.length === 2);
    for (const bot of botsWith2) {
      if (isWinner(bot)) {
        return bot.number;
      }
      const { low, high } = instructions[bot.number];
      const { lowValue, highValue } = getNumbers(bot);
      if (low.type === "bot") {
        if (bots[low.value]) {
          giveValueToBot(lowValue, bots[low.value]);
        } else {
          bots[low.value] = { numbers: [lowValue], number: low.value };
        }
      }
      if (high.type === "bot") {
        if (bots[high.value]) {
          giveValueToBot(highValue, bots[high.value]);
        } else {
          bots[high.value] = { numbers: [highValue], number: high.value };
        }
      }
      bot.numbers = [];
    }
  }
};
export const part2 = (input: string) => {
  const { bots, instructions } = parse(input);
  const outputs: { [key: string]: number } = {};
  while (Object.values(bots).some((value) => value.numbers.length > 0)) {
    const botsWith2 = Object.values(bots).filter((value) => value.numbers.length === 2);
    for (const bot of botsWith2) {
      const { low, high } = instructions[bot.number];
      const { lowValue, highValue } = getNumbers(bot);
      if (low.type === "bot") {
        if (bots[low.value]) {
          giveValueToBot(lowValue, bots[low.value]);
        } else {
          bots[low.value] = { numbers: [lowValue], number: low.value };
        }
      } else {
        outputs[low.value] = lowValue;
      }
      if (high.type === "bot") {
        if (bots[high.value]) {
          giveValueToBot(highValue, bots[high.value]);
        } else {
          bots[high.value] = { numbers: [highValue], number: high.value };
        }
      } else {
        outputs[high.value] = highValue;
      }
      bot.numbers = [];
    }
  }
  return outputs[0] * outputs[1] * outputs[2];
};
