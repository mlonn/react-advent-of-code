interface Item {
  type: "microchip" | "generator";
  element: string;
}

interface Floor {
  elevator: boolean;
  items: Item[];
}

const isSafe = (floors: Floor[]): boolean => {
  return true;
};

export const part1 = (input: string) => {
  const floors: Floor[] = [
    {
      elevator: false,
      items: [
        { element: "polonium", type: "generator" },
        { element: "promethium", type: "generator" },
        { element: "thulium", type: "generator" },
        { element: "thulium", type: "microchip" },
        { element: "ruthenium", type: "generator" },
        { element: "ruthenium", type: "microchip" },
        { element: "cobalt", type: "microchip" },
      ],
    },
    {
      elevator: false,
      items: [
        { element: "cobalt", type: "generator" },
        { element: "polonium", type: "microchip" },
        { element: "promethium", type: "microchip" },
      ],
    },
    { elevator: false, items: [] },
    { elevator: false, items: [] },
  ];
  console.log(isSafe(floors));
  return isSafe(floors);
};
export const part2 = (input: string) => {
  return "Not yet solved";
};
