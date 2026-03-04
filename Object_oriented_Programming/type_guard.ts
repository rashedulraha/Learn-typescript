{
  // type guard using typeof  & in
  //!  type of --> type guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 5);
  console.log(result1);
  const result2 = add("5", "5");
  console.log(result2);

  //!  type in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name  is ${user.name} my role is ${user.role}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "Admin",
  };

  getUser(adminUser);
}
