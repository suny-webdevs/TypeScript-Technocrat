{
  // 11. Encapsulation in OOP

  // (private, protected) is the Encapsulation in OOP

  class BankAccount {
    constructor(
      private _id: number,
      public name: string,
      protected _balance: number
    ) {}

    deposit(amount: number): number {
      return (this._balance += amount)
    }

    balance(): number {
      return this._balance
    }
  }

  class StudentAccount extends BankAccount {
    // Cannot add _id property for private keyword
    // Because of public keyword I can access name key
    // But can add _balance property for protected keyword
  }

  const myAccount = new BankAccount(11, "Mr. S", 500)
  const myBalance = myAccount.balance()
  console.log(myBalance)
  const addDeposit = myAccount.deposit(500)
  console.log(addDeposit)

  // 11. Encapsulation in OOP
}
