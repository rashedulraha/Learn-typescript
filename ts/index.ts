// let a1 = "1";
// a1 = "coding testing";

// function add1(a: string, b: string): string {
//   return a + b; // type checking
// }

// let num: number = 1234_1234_1234_1234;
// let num1: bigint = 55485943583455353454535n;
// console.log("num:", num);
// console.log("num:", num1);

// let characters: string = "Hello dear";
// let isAvailable = true;

// let newArray: number[] = [3, 3, 4, 5];

// let value: undefined = undefined;
// let value2: null = null;

// let obj: { name: string; age: number } = {
//   name: "Rashedul islam",
//   age: 12,
// };

// obj = { ...obj, name: "hello", age: 21 };

// // console.log(obj);

// let valueArray: [number, string] = [12, "Hello"];

// ! any type

// let numValue;
// numValue = "4";
// numValue = 3;

function testType(value: any) {
  console.log(value);
}

//! array
const newArray: number[] = [2, 2, 3, 4, 5, 6, 7, 5];
const characters: string[] = ["a", "b"];

// const result = characters.includes("c");
// console.log(result);

// !tuples
// let coordinates: [number, number, number] = [12, 4, 745, 42, 4];

let userData: [string, number] = ["Hello", 423424];

//! enum

enum color {
  red = 3,
  green,
  blue,
}

// console.log(color.blue);

// let colorR: color = color.green;
// console.log(color.blue);

// enum

enum size {
  small,
  medium,
  large,
}

const startSize: size = size.large;

// console.log(startSize);

//  unknown type

// let notSure: unknown = "string";

// if (typeof notSure === "s") {
//   notSure.toFixed(2);
// } else if (typeof (notSure === "1")) {
// }

// !naver type

// function add(a: number, b: number): number {
//   return a + b;
// }

// const result = add(2, 10);
// console.log(result);

// let name: string[] = ["Rashedul", "xyz", "pqu"];
// let age: number[] = [25, 30, 40, 45];

// type user = {
//   name: string;
//   email: string;
//   phoneNumber: number;
//   age: string;
// };

// const number: user = {
//   name: "Rashedul Islam",
//   email: "xyz@gmail.com",
//   phoneNumber: 1728484548,
//   age: "12",
// };

// console.log(number);
