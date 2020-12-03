interface Status {
  [key: number]: {
    complete: boolean;
    veryComplete: boolean;
  };
}
const status: Status = {
  1: {
    complete: false,
    veryComplete: false,
  },
};

export default status;
