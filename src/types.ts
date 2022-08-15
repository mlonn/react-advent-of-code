export type Solver = (input: string) => number | string;
export interface Status {
  [key: number]: {
    complete: boolean;
    veryComplete: boolean;
  };
}
