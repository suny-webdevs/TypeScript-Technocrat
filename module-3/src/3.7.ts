{
  // 7. Getter and setter

  class BankAccount {
    constructor(
      private _id: number,
      public name: string,
      protected _balance: number
    ) {}

    set deposit(amount: number) {
      this._balance += amount
    }

    get balance() {
      return this._balance
    }
  }

  const myAccount = new BankAccount(12, "Sunny", 300)
  console.log(myAccount.balance)
  const addDeposit = (myAccount.deposit = 700)
  console.log(addDeposit)

  // 7. Getter and setter
}
