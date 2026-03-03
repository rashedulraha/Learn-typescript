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
}
