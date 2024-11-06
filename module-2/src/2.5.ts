{
  // 5. Function with generics

  const genericFunction = <T>(param: T): T[] => {
    return [param]
  }

  const stringToArray = genericFunction<string>("bangladesh")
  console.log(stringToArray)

  const numberToArray = genericFunction<number>(123)
  console.log(numberToArray)

  interface User {
    name: string
    age: number
    smartPhone: boolean
  }

  const user1 = genericFunction<User>({
    name: "Sunny",
    age: 24,
    smartPhone: true,
  })
  console.log(user1)

  const genericTuple = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2]

  const address = genericTuple<string, { country: string }>("Asia", {
    country: "Bangladesh",
  })
  console.log(address)

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development"
    return {
      ...student,
      course,
    }
  }

  const student1 = addCourseToStudent<{ name: string; age: number }>({
    name: "Sunny",
    age: 24,
  })
  console.log(student1)

  // 5. Function with generics
}
