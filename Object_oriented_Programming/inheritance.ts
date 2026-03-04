{
  //  OOP ->  inheritances

  class persons {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} Will sleep for ${numberOfHours}`);
    }
  }

  class Student extends persons {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} Will sleep for ${numberOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} Will take ${numOfClass} classes`);
    }
  }

  const student1 = new Student("Mr.student", 20, "Gaganpur");

  class Teacher extends persons {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} Will sleep for ${numberOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} Will sleep for ${numOfClass}`);
    }
  }

  const Teacher1 = new Teacher("Mr.student", 20, "Gaganpur", "Math Teacher");
}
