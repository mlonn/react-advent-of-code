import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines } from "../../../../utils/helpers";

interface Props {}
type Ingredient = {
  capacity: number;
  durability: number;
  flavor: number;
  texture: number;
  calories: number;
};

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  function getStuff() {
    const stuffs: Ingredient[] = [];
    lines(data).forEach((line) => {
      const match = line.match(
        /(.*): capacity (.*), durability (.*), flavor (.*), texture (.*), calories (.*)/
      );
      if (match) {
        const [, , capacity, durability, flavor, texture, calories] = match;
        stuffs.push({
          capacity: +capacity,
          durability: +durability,
          flavor: +flavor,
          texture: +texture,
          calories: +calories,
        });
      }
    });
    return stuffs;
  }

  function getScore(
    ingredients: Ingredient[],
    amounts: number[],
    countCalories = false
  ) {
    const cookie: any = {
      capacity: 0,
      durability: 0,
      flavor: 0,
      texture: 0,
      calories: 0,
    };

    for (let i = 0; i < ingredients.length; i++) {
      const { capacity, durability, flavor, texture, calories } =
        ingredients[i];
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

  const part1 = () => {
    const stuffs = getStuff();
    let bestScore = -1;
    Object.values(perm).forEach((p) => {
      const score = getScore(stuffs, p);
      if (score > bestScore) {
        bestScore = score;
      }
    });
    setSolution1(bestScore);
  };

  const part2 = () => {
    const stuffs = getStuff();
    let bestScore = -1;
    Object.values(perm).forEach((p) => {
      const score = getScore(stuffs, p, true);
      if (score > bestScore) {
        bestScore = score;
      }
    });
    setSolution2(bestScore);
  };
  const MAX_TSP = 100;
  const N_INGREDIENTS = 4;
  const ingredients = [];

  for (let i = 0; i < N_INGREDIENTS; i++) {
    if (i === 0) {
      ingredients[i] = MAX_TSP - N_INGREDIENTS + 1;
    } else {
      ingredients[i] = 1;
    }
  }
  const perm: { [key: string]: number[] } = {};

  function decrement(ingredients: number[]) {
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
        decrement(copy);
      }
    }
  }

  decrement(ingredients);

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);

  return (
    <div>
      <h2>--- Day 15: Science for Hungry People ---</h2>
      <div>
        <button onClick={part1}>[Solve part 1]</button>
        {solution1}
      </div>
      <div>
        <button onClick={part2}>[Solve part 2]</button>
        {solution2}
      </div>
    </div>
  );
};

export default Solution;
