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
}
