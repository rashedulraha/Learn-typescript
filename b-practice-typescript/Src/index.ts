// const name = (a: number, b: number) => {
//   return 2 + 2;
// };

import type ___type_script = require("./___type_script");

// const result = name(2, 2);
// console.log(result);

// const products: ___type_script.product = {
//   id: 1,
//   price: 12,
//   title: "nothing",
//   des: "lorem",
//   image: "fsajfs",
//   person: {
//     name: "rashedul islam",
//   },
// };

//! array

// ? Square bracket syntax

// let numbers: number[] = [2, 2, 41, 8];
// let string: string[] = ["Rashedul islam"];

// ? Generic syntax
// let number: Array<number> = [23, 23, 522];
// let flags: Array<boolean> = [true, false];

// !tuple

// type stringNumberPair = [string, number];

// const pair: stringNumberPair = ["hello", 45];

// const user = {
//   name: "Rashed",
//   age: 20,
// };

// const user: { name: string; age: number } = {
//   name: "Rashed",
//   age: 24,
// };

// interface User {
//   name: string;
//   age: number;
// }

// const u: User = {
//   name: "Rayhan",
//   age: 21
// };

//! type compatibility

//? 1 Combining

// union type

//  type operator

// type typeAB = typeA & typeA
// type typeAB = typeAB & typeAB;

//!  intersection

type a = { name: string };
type b = { age: number };
