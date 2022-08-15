import { part1, part2 } from "./solution";
import input from "./input";

describe("day 15", () => {
  it("should solve part 1", async () => {
    const result = part1(input);
    expect(result).toBe(13882464);
  });
  it("should solve part 2", function () {
    const result = part2(input);
    expect(result).toBe(11171160);
  });
});
