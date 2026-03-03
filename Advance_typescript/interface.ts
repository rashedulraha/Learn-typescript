{
  // ! interfaces

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoleOne = User1 & { role: string };

  //  user with role extends role one
  interface UserWithRoleTwo extends User2 {
    role: string;
  }

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User1 = {
    name: "Rashedul",
    age: 50,
  };

  // user with role one

  const userRole: UserWithRoleTwo = {
    name: "Rashedul",
    age: 56,
    role: "admin",
  };

  //  array in type
  type Roll1 = number[];

  //  array in interfaces
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll2 = [1, 2, 3];

  //!  type interface and type in function
  // using type
  type Add1 = (num1: number, num2: number) => number;
  // using interfaces
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
