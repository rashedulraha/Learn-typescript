{
  // union types

  // type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
  // type FullStackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";
  // type Developer = FrontendDeveloper | FullStackDeveloper;

  // union and other

  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "male" | "female";
  //   bloodGroup: "A+" | "B+" | "AB+" | "O+";
  // };

  // use user type alias

  // const user1: User = {
  //   name: "Rashedul",
  //   gender: "male",
  //   bloodGroup: "AB+",
  // };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "BackendDeveloper";
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS", "REACT"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };
}
