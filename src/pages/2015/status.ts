interface Status {
  [key: number]: {
    complete: boolean;
    veryComplete: boolean;
  };
}
const status: Status = {
  1: {
    complete: true,
    veryComplete: true,
  },
  2: {
    complete: true,
    veryComplete: true,
  },
  3: {
    complete: true,
    veryComplete: true,
  },
  4: {
    complete: true,
    veryComplete: true,
  },
  5: {
    complete: true,
    veryComplete: true,
  },
};

export default status;
