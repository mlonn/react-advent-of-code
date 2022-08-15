import { part1, part2 } from "./solution";
import input from "./input";

describe("day 1", () => {
  it("should solve part 1", async () => {
    const result = part1(input);
    expect(result).toBe(232);
  });
  it("should solve part 2", function () {
    const result = part2(input);
    expect(result).toBe(1783);
  });
});
