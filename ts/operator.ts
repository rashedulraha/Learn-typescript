{
  // spread operator
  // rest operator
  // destructuring

  //  spread operator
  const bros1: string[] = ["Raha", "Rashedul", "Rashed"];
  const bros2: string[] = ["Rahat", "Romamn", "manik"];

  bros1.push(...bros2);
  console.log(bros1);

  const newArr = [...bros1, ...bros2];
  console.log(newArr);

  //   spread operator using object

  const mentorOne = {
    typescript: "Rashedul",
    nextjs: "Romman",
    prisma: "Abdullah",
  };

  const mentorTwo = {
    dbms: "rasel",
    c: "Faim",
    Go: "Kibria",
  };

  const newResultMentor = { ...mentorOne, ...mentorTwo };
  console.log(newResultMentor);
}
