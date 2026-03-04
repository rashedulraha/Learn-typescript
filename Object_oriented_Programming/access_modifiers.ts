{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
  }

  const poorMensAccount = new BankAccount(22, "Mr.Rahim", 2000);
  poorMensAccount.addDeposit(50);
}
