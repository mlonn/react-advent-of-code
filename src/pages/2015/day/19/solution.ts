import { lines } from "../../../../utils/helpers";

export const part1 = (input: string): number => {
  const rules: { input: string; output: string }[] = [];
  let mol: string = "";
  lines(input).forEach((line) => {
    if (line.includes("\n")) {
      return;
    } else if (line.includes("=>")) {
      const [input, output] = line.split(" => ");
      rules.push({ input, output });
    } else {
      mol = line;
    }
  });
  const distict = new Set();
  for (const rule of rules) {
    const re = new RegExp(rule.input, "g");
    let match;
    while ((match = re.exec(mol)) != null) {
      const replaced = mol.substring(0, match.index) + rule.output + mol.substring(match.index + rule.input.length);
      distict.add(replaced);
    }
  }
  return distict.size;
};

interface Rule {
  input: string;
  output: string;
}
export const part2 = (input: string) => {
  const rules: Rule[] = [];
  let mol: string = "";
  lines(input).forEach((line) => {
    if (line.includes("\n")) {
      return;
    } else if (line.includes("=>")) {
      const [input, output] = line.split(" => ");
      rules.push({ input, output });
    } else {
      mol = line;
    }
  });

  let replacements = 0;
  while (mol !== "e") {
    for (const rule of rules) {
      const re = new RegExp(rule.output, "g");
      while (re.exec(mol) != null) {
        mol = mol.replace(rule.output, rule.input);
        replacements++;
      }
    }
  }
  return replacements;
};
