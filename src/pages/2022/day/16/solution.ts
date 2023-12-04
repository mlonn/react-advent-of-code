import { lines } from "../../../../utils/helpers";

interface Valve {
  name: string;
  flowRate: number;
  open: boolean;
  tunnels: string[];
}
type Valves = { [key: string]: Valve };
export const part1 = (input: string) => {
  const valves: Valves = {};
  lines(input).forEach((line) => {
    const match = line.match(/Valve (.*) has flow rate=(.*); tunnels? leads? to valves? (.*)/);
    if (match) {
      const [, name, flowRate, tunnels] = match;
      valves[name] = {
        name,
        flowRate: +flowRate,
        open: false,
        tunnels: tunnels.split(", "),
      };
    } else {
      throw new Error("invalid");
    }
  });
  const current = valves["AA"];
  console.log(traverse(current, valves, 0, []));
  return "Not yet solved";
};

const traverse = (valve: Valve, valves: Valves, time: number, visited: string[]): number => {
  console.log(
    time,
    Object.values(valves).reduce((p, c) => {
      if (c.open) {
        return [...p, c.name];
      }
      return p;
    }, [] as string[])
  );
  if (time > 30) {
    return 0;
  }

  let nextTime = time;
  let flow = Object.values(valves).reduce((p, c) => {
    if (c.open) {
      return p + c.flowRate;
    }
    return p;
  }, 0);

  if (!valve.open && valve.flowRate !== 0) {
    nextTime++;
    valve.open = true;
    flow += Object.values(valves).reduce((p, c) => {
      if (c.open) {
        return p + c.flowRate;
      }
      return p;
    }, 0);
  }
  return (
    flow +
    Math.max(
      ...valve.tunnels.map((v) => {
        return traverse(valves[v], valves, nextTime + 1, [...visited, valve.name]);
      })
    )
  );
};

export const part2 = (input: string) => {
  return "Not yet solved";
};
