{
  //!  generic type

  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [3, 5, 5, 8, 6, 8];
  const rollNumber: GenericArray<number> = [3, 5, 5, 8, 6, 8];

  // const friends: string[] = ["Rashedul", "Raha", "Romman"];
  const friends: GenericArray<string> = ["Rashedul", "Raha", "Romman"];

  // const booleanArray: boolean[] = [true, false, true];
  const booleanArray: GenericArray<boolean> = [true, false, true];
  //

  //  Array of object using generic

  type User = { name: string; age: number }[];

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Rashedul", age: 45 },
    { name: "Romman", age: 45 },
    { name: "Abdullah", age: 56 },
  ];

  //  generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const mens: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const personData: GenericTuple<
    number,
    { name: string; email: string; age: number }
  > = [120, { name: "Rashedul", email: "emil@gmail.com", age: 45 }];
}
