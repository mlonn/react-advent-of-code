import { useState } from "react";

interface Props {}

const Solution = (props: Props) => {
  const [data] = useState<string>("hxbxwxba");

  const [solution1, setSolution1] = useState<string>();
  const [solution2, setSolution2] = useState<string>();

  const increment = (input: string): string => {
    let output = "";
    let overflow = false;
    for (let i = input.length - 1; i >= 0; i--) {
      const char = input.charCodeAt(i);
      if (i === input.length - 1) {
        if (char === 122) {
          output = String.fromCharCode(97) + output;
          overflow = true;
        } else {
          output = String.fromCharCode(char + 1) + output;
        }
      } else if (char === 122 && overflow) {
        output = String.fromCharCode(97) + output;
      } else if (overflow) {
        output = String.fromCharCode(char + 1) + output;
        overflow = false;
      } else {
        output = String.fromCharCode(char) + output;
      }
    }

    return output;
  };
  const hasStraight = (password: string): boolean => {
    let prevChar = password.charCodeAt(0);
    let straightLength = 1;
    for (let i = 1; i < password.length; i++) {
      const char = password.charCodeAt(i);
      if (straightLength === 3) {
        return true;
      }
      if (char - prevChar === 1) {
        straightLength++;
      } else {
        straightLength = 1;
      }
      prevChar = char;
    }
    return false;
  };

  const hasInvalidChars = (password: string): boolean =>
    new RegExp(/[iol]+/).test(password);

  const hasDoubleCharacter = (password: string): boolean =>
    new RegExp(/(.)\1.*(.)\2/).test(password);

  const isValid = (password: string) => {
    if (!hasStraight(password)) {
      return false;
    }
    if (hasInvalidChars(password)) {
      return false;
    }
    if (!hasDoubleCharacter(password)) {
      return false;
    }
    return true;
  };

  function getNextPassword(n = 1) {
    let next = data;
    let found = 0;
    while (found <= n) {
      next = increment(next);
      if (isValid(next)) {
        found++;
      }
    }
    return next;
  }

  const part1 = () => {
    setSolution1(getNextPassword());
  };

  const part2 = () => {
    setSolution2(getNextPassword(2));
  };

  return (
    <div>
      <h2>--- Day 11: Corporate Policy ---</h2>
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
