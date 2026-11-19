# React Advent of Code

Advent of Code solutions with a small React UI, built with [Vite](https://vite.dev).

Requires Node 24 (see `.nvmrc`; run `nvm use`).

## Scripts

- `yarn start` (or `yarn dev`): start the dev server on [http://localhost:3000](http://localhost:3000).
- `yarn test`: run the solution tests with [Vitest](https://vitest.dev) in watch mode (`yarn test run` for a single run).
- `yarn typecheck`: type-check the project with `tsc`.
- `yarn lint`: lint `src` with ESLint.
- `yarn build`: type-check and build for production into `build/`.
- `yarn preview`: serve the production build locally.

## Adding a day

Each puzzle lives in `src/pages/<year>/day/<day>/` with a `solution.ts` exporting `part1` and `part2`, an `input.ts` default-exporting the puzzle input, and an optional `solution.test.ts`. The solution page picks these up automatically via `import.meta.glob`.
