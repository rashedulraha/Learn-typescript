//! void

function example(): void {
  console.log("Hello world");
}

// ! undefined
// function doSomething(x: string) {
//   if (x === null) {
//     console.log("do nothing");
//   } else {
//     console.log("Hello " + x.toUpperCase());
//   }
// }

// doSomething("Rashedul Islam");

//!  interface

export interface product {
  id: number;
  price: number;
  title: string;
  des: string;
  image: string;
  person: {
    name: string;
  };
}

const product: product = {
  id: 1,
  price: 250,
  title: "The best products in this shope",
  des: "lorem200",
  image: "https/home.png",
  person: {
    name: "Ariyan",
  },
};
const productsInformation: product = {
  id: 1,
  price: 250,
  title: "The best products in this shope",
  des: "lorem200",
  image: "https/home.png",
  person: {
    name: "Ariyan",
  },
};
