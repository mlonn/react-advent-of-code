import md5 from "md5";

export const part1 = (input: string) => {
  let index = 0;
  let password = "";
  while (password.length < 8) {
    const test = `${input}${index}`;
    const hash = md5(test);
    const match = hash.match(/^0{5}(.)/);
    if (match) {
      const [, letter] = match;
      password += letter;
      console.log(hash, password);
    }
    index++;
  }
  return password;
};
export const part2 = (input: string) => {
  let index = 0;
  let password = Array(8).fill(null);
  while (password.includes(null)) {
    const test = `${input}${index}`;
    const hash = md5(test);
    const match = hash.match(/^0{5}(.)(.)/);
    if (match) {
      const [, possiblePosition, letter] = match;
      const position = Number(possiblePosition);
      if (!isNaN(position) && position <= 7 && password[position] == null) {
        password[position] = letter;
        console.log(hash, position, letter, password);
      }
    }
    index++;
  }
  return password.join("");
};
