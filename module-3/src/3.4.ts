{
  // 4. Type guard using typeof & in

  // typeof guard
  type AlphaNumeric = string | number
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2
    } else {
      return param1.toString() + param2.toString()
    }
  }

  const result1 = add(50, 50)
  const result2 = add("50", "50")
  const result3 = add(50, "50")
  const result4 = add("50", 50)
  console.log(result1, result2, result3, result4)

  // in guard
  type NormalUser = {
    name: string
  }
  type AdminUser = {
    name: string
    role: "admin"
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`i am ${user.name}. I am ${user.role}`)
    } else {
      console.log(`I am ${user.name}.`)
    }
  }

  const normalUser: NormalUser = {
    name: "Mr. Normal",
  }
  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  }

  getUser(normalUser)
  getUser(adminUser)

  // 4. Type guard using typeof & in
}
