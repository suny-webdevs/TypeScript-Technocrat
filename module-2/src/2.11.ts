{
  // 11. Utility Types

  type Person = {
    name: string
    age: number
    email?: string
    contactNo: number
  }

  type NameAge = Pick<Person, "name" | "age">
  type contactInfo = Omit<Person, "name" | "age">
  type PersonReq = Required<Person>
  type PersonPer = Partial<Person>
  type PersonRead = Readonly<Person>
  type EmptyObj = Record<string, unknown>

  const obj: EmptyObj = {
    aa: "aa",
    bb: 11,
    cc: true,
  }

  // 11. Utility Types
}
