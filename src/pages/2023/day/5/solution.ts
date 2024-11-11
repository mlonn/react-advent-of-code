interface M {
  destinationStart: number;
  sourceStart: number;
  rangeLength: number;
}
interface maps {
  "seed-to-soil": M[];
  "soil-to-fertilizer": M[];
  "fertilizer-to-water": M[];
  "water-to-light": M[];
  "light-to-temperature": M[];
  "temperature-to-humidity": M[];
  "humidity-to-location": M[];
}
function MapNumber(m: M, n: number): number | undefined {
  if (n < m.sourceStart) return undefined;
  if (n > m.sourceStart + m.rangeLength - 1) return undefined;
  return m.destinationStart + (n - m.sourceStart);
}

export const part1 = (input: string) => {
  let [seedsString, ...maps] = input.split("\n\n");
  const seeds = seedsString
    .replace("seeds: ", "")
    .split(" ")
    .map((v) => +v);

  const m = maps.map((map) => map.split("\n"));
  let mm: maps = {
    "fertilizer-to-water": [],
    "humidity-to-location": [],
    "light-to-temperature": [],
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "temperature-to-humidity": [],
    "water-to-light": [],
  };
  for (const [key, ...rest] of m) {
    mm[key.replace(" map:", "") as keyof maps] = rest.map((v) => v.split(" ")).map(([destinationStart, sourceStart, rangeLength]) => ({ destinationStart: +destinationStart, sourceStart: +sourceStart, rangeLength: +rangeLength }));
  }
  let minLocation = Number.MAX_VALUE;
  for (const seed of seeds) {
    const soil = MapInput(mm["seed-to-soil"], seed);
    const fertilizer = MapInput(mm["soil-to-fertilizer"], soil);
    const water = MapInput(mm["fertilizer-to-water"], fertilizer);
    const light = MapInput(mm["water-to-light"], water);
    const temperature = MapInput(mm["light-to-temperature"], light);
    const humidity = MapInput(mm["temperature-to-humidity"], temperature);
    const location = MapInput(mm["humidity-to-location"], humidity);

    if (location < minLocation) {
      minLocation = location;
    }
  }

  return minLocation;
};

function MapInput(mm: M[], input: number): number {
  let m = mm.find((m) => MapNumber(m, input));
  let value = input;
  if (m) {
    value = MapNumber(m, input)!;
  }
  return value;
}
function MapInput2(mm: M[], input: number, amount: number): number[] {
  let m = mm.find((m) => MapNumber(m, input));
  let ma = mm.find((m) => MapNumber(m, input + amount));
  const value: number[] = [];
  if (m) {
    value.push(MapNumber(m, input)!);
    if (ma && ma.sourceStart !== m.sourceStart) {
      value.push(MapNumber(ma, input + amount)!);
    } else {
      value.push(MapNumber(m, input)!);
    }
    return value;
  }
  return [input, input + amount];
}
function mapLocation(mm: maps, seed: number, minLocation: number, amount: number) {
  const soil = MapInput2(mm["seed-to-soil"], seed, amount);
  const fertilizer = [];
  for (const number of soil) {
    fertilizer.push(...MapInput2(mm["soil-to-fertilizer"], number, amount));
  }

  const water = [];
  for (const number of fertilizer) {
    water.push(...MapInput2(mm["fertilizer-to-water"], number, amount));
  }
  const light = [];
  for (const number of water) {
    light.push(...MapInput2(mm["water-to-light"], number, amount));
  }
  const temperature = [];
  for (const number of light) {
    temperature.push(...MapInput2(mm["light-to-temperature"], number, amount));
  }
  const humidity = [];
  for (const number of temperature) {
    humidity.push(...MapInput2(mm["temperature-to-humidity"], number, amount));
  }
  const location = [];
  for (const number of humidity) {
    location.push(...MapInput2(mm["humidity-to-location"], number, amount));
  }
  for (const number of location) {
    if (number < minLocation) {
      minLocation = number;
    }
  }
  return minLocation;
}

export const part2 = (input: string) => {
  let [seedsString, ...maps] = input.split("\n\n");
  const seeds = seedsString
    .replace("seeds: ", "")
    .split(" ")
    .map((v) => +v);

  const m = maps.map((map) => map.split("\n"));
  let mm: maps = {
    "fertilizer-to-water": [],
    "humidity-to-location": [],
    "light-to-temperature": [],
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "temperature-to-humidity": [],
    "water-to-light": [],
  };
  for (const [key, ...rest] of m) {
    mm[key.replace(" map:", "") as keyof maps] = rest.map((v) => v.split(" ")).map(([destinationStart, sourceStart, rangeLength]) => ({ destinationStart: +destinationStart, sourceStart: +sourceStart, rangeLength: +rangeLength }));
  }
  let minLocation = Number.MAX_VALUE;

  for (let i = 0; i < seeds.length; i += 2) {
    let [seed, amount] = [seeds[i], seeds[i + 1]];
    minLocation = mapLocation(mm, seed, minLocation, amount);
  }

  return minLocation;
};
