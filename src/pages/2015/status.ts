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
};

export default status;
