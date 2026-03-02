{
  type User = {
    firstName: string;
    lastName: string;
    age: number;
    contactNumber: number;
    address: string;
    email: string;
  };

  const user: User = {
    firstName: "Rashedul",
    lastName: "Islam",
    age: 58,
    contactNumber: 499400393498,
    address: "village",
    email: "email@gmail.com",
  };
  // console.log(user);

  // const add = (number1: number, number2: number): number => {
  //   return number1 + number2;
  // };

  //  call function using type alias
  type Add = (number1: number, number2: number) => number;

  const add: Add = (number1, number2) => {
    return number1 + number2;
  };

  const result = add(50, 50);
  console.log(result);
}
