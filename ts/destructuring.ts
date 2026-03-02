{
  //! object destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Rashedul",
      middleName: "Islam",
      lastName: "Rashed",
    },
    contactNumber: "01992284845",
    address: "Gaganpur",
  };

  const {
    id,
    contactNumber,
    name: { middleName },
  } = user;

  //!  arr destructuring

  const myFriends = [
    "Rashedul",
    "Romman",
    "Abdullah",
    "Kibria",
    "Ariful islam",
  ];

  const [, b, c, ...rest] = myFriends;

  rest.map((r) => console.log(r));
  console.log(b, c, rest);
}
