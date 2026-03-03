{
  //!  function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  //! function with generic

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const genericResult = createArrayWithGeneric<boolean>(false);

  const result = createArray("Bangladesh");
  console.log(result);
}
