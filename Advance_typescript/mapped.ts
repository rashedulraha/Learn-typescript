{
  // mapped types

  const arrOfNumbers: number[] = [1, 2, 4, 2, 5, 4];

  //  convert number to string

  // const arrOfString: string[] = ["1", "5"];

  const arrayOfString: string[] = arrOfNumbers.map((number) =>
    number.toString(),
  );

  console.log(arrayOfString);

  // example

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look  up type

  // type AreaString = {
  //   height: string;
  //   width: string;
  // };

  //! dynamic change type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 500,
  };
}
