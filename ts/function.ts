const poorUser = {
  name: "Rashedul",
  balance: 0,
  addBalance(balance: number): number {
    this.balance += balance;
    return this.balance;
  },
};

const result = poorUser.addBalance(200);
console.log(result);
console.log(poorUser.balance);
