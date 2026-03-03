{
  // constraint
  type Student = { name: string; email: string; devType: string };

  const addCourseToStudent = <T extends Student>(student: T) => {
    const course = { courseOne: "nextLevelWebDevelopment" };
    return { ...student, ...course };
  };

  const student1 = addCourseToStudent({
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "Frontend",
  });

  const student2 = addCourseToStudent({
    name: "Mr.Y",
    email: "y@gmail.com",
    devType: "Backend",
  });
  const student3 = addCourseToStudent({
    name: "Mr.Y",
    email: "y@gmail.com",
    devType: "Backend",
  });

  // generic  constraint  with keyof operator

  type vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof vehicle;

  const user = {
    name: " Mr.  Rashed",
    age: 50,
    address: "ctg",
    city: "naogaon",
  };

  const car = {
    model: "FSNND88H",
    color: "black",
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "color");
}
