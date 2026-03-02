const arr: number[] = [1, 2, 3, 4, 5, 6];

const newArray: string[] = arr.map(
  (element: number): string => `${element * element}`,
);
console.log(newArray);
