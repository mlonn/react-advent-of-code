import { D, generateBoard, HEIGHT, L, lightBoard, R, U, WIDTH, dayOfRow } from "./circuit";

// Small deterministic PRNG (mulberry32) so failures are reproducible.
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const bits = (mask: number) => [U, R, D, L].filter((b) => mask & b).length;

describe("2017 circuit board", () => {
  const seeds = Array.from({ length: 20 }, (_, i) => i + 1);

  it.each(seeds)("connects every wire consistently (seed %i)", (seed) => {
    const { cells } = generateBoard(seeded(seed));
    expect(cells).toHaveLength(HEIGHT);
    for (let y = 0; y < HEIGHT; y++) {
      expect(cells[y]).toHaveLength(WIDTH);
      for (let x = 0; x < WIDTH; x++) {
        const { mask } = cells[y][x];
        expect(!!(mask & R)).toBe(x + 1 < WIDTH && !!(cells[y][x + 1].mask & L));
        expect(!!(mask & D)).toBe(y + 1 < HEIGHT && !!(cells[y + 1][x].mask & U));
        if (x === 0) expect(mask & L).toBe(0);
        if (y === 0) expect(mask & U).toBe(0);
      }
    }
  });

  it.each(seeds)("has one single-connection star per row (seed %i)", (seed) => {
    const { cells, stars } = generateBoard(seeded(seed));
    cells.forEach((row, y) => {
      const rowStars = row.filter((c) => c.kind === "star");
      expect(rowStars).toHaveLength(1);
      expect(bits(rowStars[0].mask)).toBe(1);
      expect(row[stars[y].x].kind).toBe("star");
    });
  });

  it("places chips and components", () => {
    const { cells } = generateBoard(seeded(7));
    const flat = cells.flat();
    expect(flat.some((c) => c.kind === "chip")).toBe(true);
    expect(flat.some((c) => c.kind === "component")).toBe(true);
  });

  it("produces a different board each time", () => {
    const a = generateBoard(seeded(1))
      .cells.flat()
      .map((c) => c.ch)
      .join("");
    const b = generateBoard(seeded(2))
      .cells.flat()
      .map((c) => c.ch)
      .join("");
    expect(a).not.toBe(b);
  });

  it.each(seeds)("only lights connected cells in completed rows (seed %i)", (seed) => {
    const board = generateBoard(seeded(seed));
    const done = new Set([1, 2, 3]);
    const dist = lightBoard(board, (day) => done.has(day));
    for (let y = 0; y < HEIGHT; y++) {
      const star = board.stars[y];
      if (done.has(dayOfRow(y))) expect(dist[y][star.x]).toBe(0);
      for (let x = 0; x < WIDTH; x++) {
        if (dist[y][x] === -1) continue;
        expect(done.has(dayOfRow(y))).toBe(true);
        expect(board.cells[y][x].kind).not.toBe("chip");
      }
    }
  });

  it("lights nothing when no day is complete", () => {
    const dist = lightBoard(generateBoard(seeded(3)), () => false);
    expect(dist.flat().every((d) => d === -1)).toBe(true);
  });
});
