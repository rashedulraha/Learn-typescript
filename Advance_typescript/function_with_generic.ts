{
  //!  function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  // user type
  // type User = { name: string; age: number };

  //! function with generic

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const genericResult = createArrayWithGeneric<string>("Hello bangladesh");

  // const resGenericObject = createArrayWithGeneric<User>({
  //   name: "Rashedul islam",
  //   age: 45,
  // });

  // const result = createArray("Bangladesh");
  // console.log(result);

  //  create array with tuple

  const user = {
    age: 25,
    village: "gaganpur",
    isBoy: true,
  };

  type User = { age: number; village: string; isBoy: boolean };

  const createArrayWithTuple = <P, Q>(params1: P, params2: Q): [P, Q] => {
    return [params1, params2];
  };

  const createResult = createArrayWithTuple<string, string>("Hello", "Nothing");
  const result = createArrayWithTuple<boolean, boolean>(true, false);
  const resultObject = createArrayWithTuple<string, User>(
    "Rashedul Islam",
    user,
  );

  console.log(createResult);
  console.log(result);
}
