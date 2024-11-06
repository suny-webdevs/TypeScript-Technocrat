{
  // 2. Interface, type vs interface

  //   Type and Interface with object
  type User1 = {
    name: string
    age: number
  }

  interface User2 {
    name: string
    age: number
  }

  const user1: User1 = {
    name: "John",
    age: 30,
  }

  const user2: User2 = {
    name: "John",
    age: 30,
  }

  type UserWithRole1 = User1 & { role: string }
  const user11: UserWithRole1 = {
    name: "John",
    age: 30,
    role: "admin",
  }

  interface UserWithRole2 extends User2 {
    role: string
  }
  const user12: UserWithRole2 = {
    name: "John",
    age: 30,
    role: "admin",
  }

  //   Type and Interface with array
  type RollNumber1 = number[] //Recommended
  const rollNumber1: RollNumber1 = [12, 13, 33]

  interface RollNumber2 {
    [index: number]: number
  }
  const rollNumber2: RollNumber2 = [1, 2, 3]

  //   Type and Interface with function
  type Add = (num1: number, num2: number) => number
  const add: Add = (num1, num2) => num1 + num2

  interface Division {
    (num1: number, num2: number): number
  }
  const division: Division = (num1, num2) => num1 / num2
}
