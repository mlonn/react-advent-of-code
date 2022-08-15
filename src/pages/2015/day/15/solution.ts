import { lines } from "../../../../utils/helpers";

const MAX_TSP = 100;
const N_INGREDIENTS = 4;
type Ingredient = {
  capacity: number;
  durability: number;
  flavor: number;
  texture: number;
  calories: number;
};

function parse(input: string): Ingredient[] {
  const ingredients: Ingredient[] = [];
  lines(input).forEach((line) => {
    const match = line.match(
      /(.*): capacity (.*), durability (.*), flavor (.*), texture (.*), calories (.*)/
    );
    if (match) {
      const [, , capacity, durability, flavor, texture, calories] = match;
      ingredients.push({
        capacity: +capacity,
        durability: +durability,
        flavor: +flavor,
        texture: +texture,
        calories: +calories,
      });
    }
  });
  return ingredients;
}

function getScore(
  ingredients: Ingredient[],
  amounts: number[],
  countCalories = false
): number {
  const cookie: any = {
    capacity: 0,
    durability: 0,
    flavor: 0,
    texture: 0,
    calories: 0,
  };

  for (let i = 0; i < ingredients.length; i++) {
    const { capacity, durability, flavor, texture, calories } = ingredients[i];
    cookie.capacity += capacity * amounts[i];
    cookie.durability += durability * amounts[i];
    cookie.flavor += flavor * amounts[i];
    cookie.texture += texture * amounts[i];
    cookie.calories += calories * amounts[i];
  }
  const score = Object.keys(cookie).reduce((previousValue, ingredient) => {
    const currentValue = cookie[ingredient];
    if (ingredient === "calories") {
      return previousValue;
    }
    if (currentValue < 0) {
      return 0;
    }
    return previousValue * currentValue;
  }, 1);

  if (cookie.calories === 500 || !countCalories) {
    return score;
  }
  return -1;
}

export const part1 = (input: string): number => {
  const stuffs = parse(input);
  const perm = permutations();
  let bestScore = -1;
  Object.values(perm).forEach((p) => {
    const score = getScore(stuffs, p);
    if (score > bestScore) {
      bestScore = score;
    }
  });
  return bestScore;
};

export const part2 = (input: string): number => {
  const stuffs = parse(input);
  const perm = permutations();
  let bestScore = -1;
  Object.values(perm).forEach((p) => {
    const score = getScore(stuffs, p, true);
    if (score > bestScore) {
      bestScore = score;
    }
  });
  return bestScore;
};

function permutations() {
  const perm: { [key: string]: number[] } = {};
  const ingredients = [];
  for (let i = 0; i < N_INGREDIENTS; i++) {
    if (i === 0) {
      ingredients[i] = MAX_TSP - N_INGREDIENTS + 1;
    } else {
      ingredients[i] = 1;
    }
  }
  decrement(ingredients, perm);
  return perm;
}

function decrement(ingredients: number[], perm: { [key: string]: number[] }) {
  let decrementer = 0;
  for (let i = decrementer + 1; i < N_INGREDIENTS; i++) {
    const copy = [...ingredients];
    if (copy[decrementer] > 1) {
      copy[decrementer]--;
    } else {
      decrementer++;
      continue;
    }
    copy[i]++;
    if (perm[`[${copy.join(",")}]`]) {
      continue;
    }
    perm[`[${copy.join(",")}]`] = copy;
    if (decrementer < N_INGREDIENTS) {
      decrement(copy, perm);
    }
  }
}
