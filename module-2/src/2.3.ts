{
  //

  // 3. Introduction to generics

  type GenericArray<T> = Array<T>

  const rollNumbers: GenericArray<number> = [1, 2, 3]
  const friends: GenericArray<string> = ["Yeasin", "Rahi", "Farhad", "Sohan"]
  const bools: GenericArray<boolean> = [true, false, true]
  const users: GenericArray<{
    firstName: string
    lastName: string
    age: number
    isStudent: boolean
  }> = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: true,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: true,
    },
  ]

  type GenericTuple<X, Y> = [X, Y]
  interface Student {
    name: string
    age: number
    class: number | string
    roll: number
  }
  const student: GenericTuple<number, Student> = [
    1234,
    {
      name: "Sunny",
      age: 24,
      class: "Honours 3rd year",
      roll: 22055,
    },
  ]

  //
}
