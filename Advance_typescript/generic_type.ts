{
  //!  generic type

  type GenericArray<params> = Array<params>;

  // const rollNumber: number[] = [3, 5, 5, 8, 6, 8];
  const rollNumber: GenericArray<number> = [3, 5, 5, 8, 6, 8];

  // const friends: string[] = ["Rashedul", "Raha", "Romman"];
  const friends: GenericArray<string> = ["Rashedul", "Raha", "Romman"];

  // const booleanArray: boolean[] = [true, false, true];
  const booleanArray: GenericArray<boolean> = [true, false, true];
  //
}
