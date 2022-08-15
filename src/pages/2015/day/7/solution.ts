import { lines } from "../../../../utils/helpers";

const uint16 = (n: number) => {
  return n & 0xffff;
};

const getValue = (input: string, outputs: { [key: string]: number }) => {
  if (isNaN(+input)) {
    return outputs[input];
  }
  return +input;
};

export const part1 = (input: string): number => {
  return go(input);
};

const go = (input: string, outputs: { [key: string]: number } = {}) => {
  for (let index = 0; index < 10000; index++) {
    if (outputs["a"]) {
      break;
    }
    lines(input).forEach((line) => {
      const [i, o] = line.split(" -> ");
      if (outputs[o]) {
        return;
      }
      if (i.includes("AND")) {
        const [x, y] = i.split(" AND ");
        const xval = getValue(x, outputs);
        const yval = getValue(y, outputs);
        if (!isNaN(xval) && !isNaN(yval)) {
          outputs[o] = uint16(xval & yval);
        }
      } else if (i.includes("OR")) {
        const [x, y] = i.split(" OR ");
        const xval = getValue(x, outputs);
        const yval = getValue(y, outputs);
        if (!isNaN(xval) && !isNaN(yval)) {
          outputs[o] = uint16(xval | yval);
        }
      } else if (i.includes("LSHIFT")) {
        const [x, y] = i.split(" LSHIFT ");
        const xval = getValue(x, outputs);
        const yval = getValue(y, outputs);
        if (!isNaN(xval) && !isNaN(yval)) {
          outputs[o] = uint16(xval << yval);
        }
      } else if (i.includes("RSHIFT")) {
        const [x, y] = i.split(" RSHIFT ");
        const xval = getValue(x, outputs);
        const yval = getValue(y, outputs);
        if (!isNaN(xval) && !isNaN(yval)) {
          outputs[o] = uint16(xval >> yval);
        }
      } else if (i.includes("NOT")) {
        const [, x] = i.split("NOT ");
        const xval = getValue(x, outputs);
        if (!isNaN(xval)) {
          outputs[o] = uint16(~xval);
        }
      } else if (!isNaN(outputs[i])) {
        outputs[o] = outputs[i];
      } else if (!isNaN(+i)) {
        outputs[o] = +i;
      }
    });
  }
  return outputs.a;
};
export const part2 = (input: string): number => {
  const a = go(input);
  return go(input, { b: a });
};
