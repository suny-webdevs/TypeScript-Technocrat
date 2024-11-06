let course: string = "Next level development"
console.log(course)

// Array
let friends: string[] = ["Farhad", "Sohan", "Rahi"]
let olds: number[] = [25, 24, 23]

// Tuple
let myInfo: [string, number, boolean] = ["suny", 24, true]

// Object
type User = {
  readonly company: "Suny-webDevs" //Literal type
  firstName: string
  middleName?: string //This element is optional
  lastName: string
  age: number
  isStudent: boolean
}

const user1: User = {
  company: "Suny-webDevs",
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: true,
}

// Function
type Add = (num1: number, num2: number) => number

const addNumbers: Add = (a, b) => a + b
console.log(addNumbers(12, 13))
