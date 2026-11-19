// Procedurally generated circuit board for the 2017 calendar.
//
// Chips, inline components and one star per row are placed first; the remaining cells are filled with
// wave function collapse over box-drawing tiles. Every combination of up/right/down/left connections has
// at least one tile (with near-zero weights on `┼` and blank), so propagation can never reach a
// contradiction and no backtracking is needed.

export const U = 1;
export const R = 2;
export const D = 4;
export const L = 8;

const DIRS = [
  { bit: U, opp: D, dx: 0, dy: -1 },
  { bit: R, opp: L, dx: 1, dy: 0 },
  { bit: D, opp: U, dx: 0, dy: 1 },
  { bit: L, opp: R, dx: -1, dy: 0 },
];

export const WIDTH = 45;
export const HEIGHT = 25;

export type CellKind = "wire" | "chip" | "component" | "star";

export interface Cell {
  ch: string;
  /** Bitmask of U/R/D/L connections. */
  mask: number;
  kind: CellKind;
  /** Colour index for components (0-5). */
  component?: number;
}

export interface Board {
  /** cells[y][x]; row 0 is day 25, row 24 is day 1. */
  cells: Cell[][];
  /** Star position for each row. */
  stars: { x: number; y: number }[];
}

export type Random = () => number;

interface Tile {
  ch: string;
  mask: number;
  weight: number;
}

const WIRE_TILES: Tile[] = [
  { ch: "─", mask: R | L, weight: 14 },
  { ch: "│", mask: U | D, weight: 1.5 },
  { ch: "┌", mask: R | D, weight: 2 },
  { ch: "┐", mask: L | D, weight: 2 },
  { ch: "└", mask: U | R, weight: 2 },
  { ch: "┘", mask: U | L, weight: 2 },
  { ch: "├", mask: U | R | D, weight: 0.4 },
  { ch: "┤", mask: U | L | D, weight: 0.4 },
  { ch: "┬", mask: R | D | L, weight: 0.7 },
  { ch: "┴", mask: U | R | L, weight: 0.7 },
  { ch: "o", mask: U, weight: 0.15 },
  { ch: "o", mask: R, weight: 0.25 },
  { ch: "o", mask: D, weight: 0.15 },
  { ch: "o", mask: L, weight: 0.25 },
  { ch: "V", mask: U, weight: 0.15 },
  // Fallbacks that keep the tile set complete; practically never chosen unless forced.
  { ch: "┼", mask: U | R | D | L, weight: 1e-4 },
  { ch: " ", mask: 0, weight: 1e-4 },
];
const EDGE_CONNECTOR: Tile = { ch: "=", mask: R, weight: 1.5 };

const COMPONENTS = ["∧∧∧", "|(", "[─]", "┤|├", "oTo", "┤[]├"];
const CHIP_LABELS = ["ALU", "CPU", "RAM", "ROM", "I/O", "DSP", "MUX", "REG", "PLL", "ADC", "DAC", "CLK", "FPU", "BUS", "NV", "IRQ", "TX", "RX", "C0", "C1", "Q3", "U7"];

const pick = <T>(rng: Random, items: T[]): T => items[Math.floor(rng() * items.length)];
const int = (rng: Random, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));

function weightedPick(rng: Random, tiles: Tile[]): Tile {
  const total = tiles.reduce((sum, t) => sum + t.weight, 0);
  let r = rng() * total;
  for (const tile of tiles) {
    r -= tile.weight;
    if (r <= 0) return tile;
  }
  return tiles[tiles.length - 1];
}

const inside = (x: number, y: number) => x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT;

/** Fixed cells (chips, components, stars) placed before wave function collapse. */
class Layout {
  fixed: (Cell | undefined)[] = new Array(WIDTH * HEIGHT);
  /** Cells kept free so a fixed cell has a wire to connect to. */
  reserved = new Uint8Array(WIDTH * HEIGHT);
  stars: { x: number; y: number }[] = [];

  isFree(x: number, y: number) {
    return inside(x, y) && !this.fixed[y * WIDTH + x] && !this.reserved[y * WIDTH + x];
  }

  set(x: number, y: number, cell: Cell) {
    this.fixed[y * WIDTH + x] = cell;
  }

  placeChip(rng: Random): boolean {
    const w = int(rng, 5, 8);
    const h = int(rng, 3, 5);
    const x0 = int(rng, 1, WIDTH - 1 - w);
    const y0 = int(rng, 1, HEIGHT - 1 - h);
    // Keep a one-cell ring around the chip free so every pin has a wire to meet.
    for (let y = y0 - 1; y <= y0 + h; y++) for (let x = x0 - 1; x <= x0 + w; x++) if (!this.isFree(x, y)) return false;

    const label = pick(
      rng,
      CHIP_LABELS.filter((l) => l.length <= w - 2),
    );
    const labelRow = y0 + Math.floor(h / 2);
    const labelStart = x0 + 1 + Math.floor((w - 2 - label.length) / 2);
    const pin = () => rng() < 0.5;

    for (let dy = 0; dy < h; dy++) {
      for (let dx = 0; dx < w; dx++) {
        const top = dy === 0;
        const bottom = dy === h - 1;
        const left = dx === 0;
        const right = dx === w - 1;
        let ch = " ";
        let mask = 0;
        if (top && left) [ch, mask] = ["┌", R | D];
        else if (top && right) [ch, mask] = ["┐", L | D];
        else if (bottom && left) [ch, mask] = ["└", U | R];
        else if (bottom && right) [ch, mask] = ["┘", U | L];
        else if (top) [ch, mask] = pin() ? ["┴", U | R | L] : ["─", R | L];
        else if (bottom) [ch, mask] = pin() ? ["┬", D | R | L] : ["─", R | L];
        else if (left) [ch, mask] = pin() ? ["┤", U | D | L] : ["│", U | D];
        else if (right) [ch, mask] = pin() ? ["├", U | D | R] : ["│", U | D];
        else if (y0 + dy === labelRow && x0 + dx >= labelStart && x0 + dx < labelStart + label.length) ch = label[x0 + dx - labelStart];
        this.set(x0 + dx, y0 + dy, { ch, mask, kind: "chip" });
      }
    }
    for (let y = y0 - 1; y <= y0 + h; y++) for (let x = x0 - 1; x <= x0 + w; x++) if (!this.fixed[y * WIDTH + x]) this.reserved[y * WIDTH + x] = 1;
    return true;
  }

  placeComponent(rng: Random): boolean {
    const component = int(rng, 0, COMPONENTS.length - 1);
    const text = [...COMPONENTS[component]];
    const y = int(rng, 0, HEIGHT - 1);
    const x0 = int(rng, 1, WIDTH - 1 - text.length);
    // The component and the wire cells on either side of it must be free.
    for (let x = x0 - 1; x <= x0 + text.length; x++) if (!this.isFree(x, y)) return false;
    text.forEach((ch, i) => this.set(x0 + i, y, { ch, mask: R | L, kind: "component", component }));
    this.reserved[y * WIDTH + x0 - 1] = 1;
    this.reserved[y * WIDTH + x0 + text.length] = 1;
    return true;
  }

  placeStar(rng: Random, y: number) {
    for (let attempt = 0; attempt < 200; attempt++) {
      const x = int(rng, 0, WIDTH - 1);
      if (!this.isFree(x, y)) continue;
      // Stars connect to exactly one neighbouring wire; favour horizontal ones.
      const options = DIRS.filter((d) => this.isFree(x + d.dx, y + d.dy));
      if (!options.length) continue;
      const weighted = options.flatMap((d) => (d.dx ? [d, d, d] : [d]));
      const dir = pick(rng, weighted);
      this.set(x, y, { ch: "*", mask: dir.bit, kind: "star" });
      this.reserved[(y + dir.dy) * WIDTH + x + dir.dx] = 1;
      this.stars[y] = { x, y };
      return;
    }
    throw new Error(`Could not place a star in row ${y}`);
  }
}

function collapseWires(layout: Layout, rng: Random): Cell[] {
  const n = WIDTH * HEIGHT;
  const options: Tile[][] = [];
  for (let i = 0; i < n; i++) {
    const x = i % WIDTH;
    const y = Math.floor(i / WIDTH);
    const fixed = layout.fixed[i];
    if (fixed) {
      options.push([{ ch: fixed.ch, mask: fixed.mask, weight: 1 }]);
      continue;
    }
    const tiles = x === 0 ? [...WIRE_TILES, EDGE_CONNECTOR] : WIRE_TILES;
    // Nothing may connect off the edge of the board.
    options.push(tiles.filter((t) => DIRS.every((d) => !(t.mask & d.bit) || inside(x + d.dx, y + d.dy))));
  }

  const queue: number[] = [];
  const propagate = () => {
    while (queue.length) {
      const i = queue.pop()!;
      const x = i % WIDTH;
      const y = Math.floor(i / WIDTH);
      for (const d of DIRS) {
        const nx = x + d.dx;
        const ny = y + d.dy;
        if (!inside(nx, ny)) continue;
        const j = ny * WIDTH + nx;
        const canConnect = options[i].some((t) => t.mask & d.bit);
        const canSkip = options[i].some((t) => !(t.mask & d.bit));
        const next = options[j].filter((t) => (t.mask & d.opp ? canConnect : canSkip));
        if (next.length === 0) throw new Error(`Contradiction at ${nx},${ny}`);
        if (next.length !== options[j].length) {
          options[j] = next;
          queue.push(j);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) if (layout.fixed[i]) queue.push(i);
  propagate();

  for (;;) {
    // Collapse the most constrained cell next (random tie-break), so the board grows outwards from what's fixed.
    let best = -1;
    let bestScore = Infinity;
    for (let i = 0; i < n; i++) {
      if (options[i].length < 2) continue;
      const score = options[i].length + rng();
      if (score < bestScore) {
        bestScore = score;
        best = i;
      }
    }
    if (best === -1) break;
    options[best] = [weightedPick(rng, options[best])];
    queue.push(best);
    propagate();
  }

  return options.map((tiles, i) => layout.fixed[i] ?? { ch: tiles[0].ch, mask: tiles[0].mask, kind: "wire" });
}

export function generateBoard(rng: Random = Math.random): Board {
  const layout = new Layout();
  for (let placed = 0, tries = 0; placed < 5 && tries < 200; tries++) if (layout.placeChip(rng)) placed++;
  for (let placed = 0, tries = 0; placed < 14 && tries < 400; tries++) if (layout.placeComponent(rng)) placed++;
  for (let y = 0; y < HEIGHT; y++) layout.placeStar(rng, y);

  const flat = collapseWires(layout, rng);
  const cells = Array.from({ length: HEIGHT }, (_, y) => flat.slice(y * WIDTH, (y + 1) * WIDTH));
  return { cells, stars: layout.stars };
}

/** Day shown on a board row (row 0 is day 25). */
export const dayOfRow = (y: number) => HEIGHT - y;

/**
 * Lights the board from the stars of the given days. Current flows through connected wires and components
 * (not through chips) but only within rows whose day is lit. Returns each cell's distance from the nearest
 * lit star, or -1 when unlit.
 */
export function lightBoard(board: Board, isLit: (day: number) => boolean): number[][] {
  const dist = board.cells.map((row) => row.map(() => -1));
  const queue: { x: number; y: number }[] = [];
  board.stars.forEach((star, y) => {
    if (isLit(dayOfRow(y))) {
      dist[star.y][star.x] = 0;
      queue.push(star);
    }
  });
  for (let head = 0; head < queue.length; head++) {
    const { x, y } = queue[head];
    const cell = board.cells[y][x];
    for (const d of DIRS) {
      const nx = x + d.dx;
      const ny = y + d.dy;
      if (!(cell.mask & d.bit) || !inside(nx, ny) || dist[ny][nx] !== -1 || !isLit(dayOfRow(ny))) continue;
      const next = board.cells[ny][nx];
      if (next.kind === "chip" || !(next.mask & d.opp)) continue;
      dist[ny][nx] = dist[y][x] + 1;
      queue.push({ x: nx, y: ny });
    }
  }
  return dist;
}
