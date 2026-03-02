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
function testType(value) {
    console.log(value);
}
//! array
var newArray = [2, 2, 3, 4, 5, 6, 7, 5];
var characters = ["a", "b"];
// const result = characters.includes("c");
// console.log(result);
// !tuples
// let coordinates: [number, number, number] = [12, 4, 745, 42, 4];
var userData = ["Hello", 423424];
//! enum
// enum color {
//   red = 3,
//   green,
//   blue,
// }
// console.log(color.blue);
// let colorR: color = color.green;
// console.log(color.blue);
// enum
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
var startSize = size.large;
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
//! interface
// interface product {
//   id: number;
//   title: string;
//   price: number;
//   isStock: boolean;
// }
// function displayProducts(product: product) {
//   console.log(`product : ${product.title} price: ${product.price}`);
// }
// let obj: { name: string; age: number } = {
//   name: "abc",
//   age: 10,
// };
// obj = { ...obj, age: 50 };
// console.log(obj);
// ! 11.tuples
// let arr: [number, string] = [1, "Rashedul"];
// const coordinators: [number, number, number] = [10, 20, 30];
// let response:[]=[]
// enum color {
//   red = "red",
//   green = "green",
//   blue = "blue",
// }
// // console.log(color.blue);
// //!  naver type
// function throwError(message: string): never {
//   throw new Error(message);
// }
// // throwError("something weng  wrong");
// //! void type
// // function logMessage(message: string): void {
// //   console.log(message);
// // }
// // logMessage("Checking message");
//!  before  revision
// basic type
var age = 12;
var name = "Rashedul Islam";
var isStudent = true;
var hobbies = ["cricket", "coding", "Programming"];
var nothing = null;
var notDefined = undefined;
//!  any type
// let data: any = 10;
// data = "hello";
// data = true;
// data.noProblem();
//!   array
// let numbers: number[] = [2, 1, 5, 5, 55, 4, 4, 444];
// let names: Array<string> = ["a", "b"]; //generic way
//  tuple way to right typescript
// let user: [string, number][] = [
//   ["Rashedul", 12],
//   ["Rashedul", 12],
// ];
// console.log(user);
// js
// const users = [name, age];
// // ts
// let tsUser: [string, number][] = [
//   ["rashedul islam", 45],
//   ["rashedul islam", 45],
// ];
// console.log(tsUser);
//! Enums
// enum Role {
//   admin,
//   user,
//   guest,
//   moderator,
// }
// let userRole: Role = Role.admin;
// console.log(userRole);
//! unknown type
// let data: unknown = "hello typescript";
// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// } else {
//   console.log("this is number", data);
// }
//! never type
//  this function !return
// function throwError(message: string) {
//   throw new Error(message);
// }
// throwError("something wrong");
//!  void
// function message(message: string): void {
//   console.log(message);
//   // return message + "World";
// }
// message("Hello");
//! type interface and type assertions
// interface Person {
//   name: string;
//   age: number;
//   email?: string; // optional
//   readonly id: number; //only read
// }
// let PersonalInformation: Person = {
//   name: "Rashedul",
//   age: 21,
//   id: 12,
// };
// PersonalInformation = { ...PersonalInformation, age: 12, id: 122 };
// console.log(PersonalInformation);
// //! Type Alias (type keyword )
// type point = {
//   x: number;
//   y: number;
// };
// type id = string | number;
//! Type Assertion (as keyword)
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;
// // or angle bracket
// let strLength2 = (<string>someValue).length;
//! Union type
// let id: string | number;
// id = "101";
// id = 101;
// //id = true //!error
// function printId(id: string | number) {
//   console.log(`your id is ${id}`);
//   if (typeof id === "string") {
//     console.log(id.toLocaleLowerCase());
//   }
// }
// printId(id);
//! type narrowing
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input; //? padding true number
//   }
//   return padding + input; //? padding true string
// }
// function printValue(value: string | null | undefined) {
//   if (value != null) {
//     console.log(value.toUpperCase()); //?value true to string
//   }
// }
// ! interface vs type aliases
//  ? object in typescript
// const data: {
//   name: string;
//   lastName: string;
//   readonly age: number;
//   village: string;
// } = {
//   name: "Rashedul",
//   lastName: "Islam",
//   age: 45,
//   village: "Gaganpur",
// };
//? function in typescript
// function add(num1: number, num2: number): string {
//   return `${num1 + num2}`;
// }
// add(2, 55);
var poorUser = {
    name: "Rashedul",
    balance: 0,
    addBalance: function (balance) {
        return this.balance + balance;
    },
};
var result = poorUser.addBalance(100);
console.log(result);
