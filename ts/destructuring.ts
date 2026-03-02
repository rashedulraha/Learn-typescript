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

  const myFriends = ["Rashedul", "Romman", "Abdullah", "Kibria"];

  const [, b, c, d] = myFriends;
  console.log(b, c, d);
}
