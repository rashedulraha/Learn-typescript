let a1 = "1";
a1 = "coding testing";

function add1(a: string, b: string): string {
  return a + b; // type checking
}

let num: number = 1234_1234_1234_1234;
let num1: bigint = 55485943583455353454535n;
console.log("num:", num);
console.log("num:", num1);

let characters: string = "Hello dear";
let isAvailable = true;

let newArray: number[] = [3, 3, 4, 5];

let value: undefined = undefined;
let value2: null = null;

let obj: { name: string; age: number } = {
  name: "Rashedul islam",
  age: 12,
};

obj = { ...obj, name: "hello", age: 21 };

// console.log(obj);

let valueArray: [number, string] = [12, "Hello"];
