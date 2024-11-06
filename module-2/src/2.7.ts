{
  // 7. Constraint using key of

  interface Bikes {
    name: string
    model: string
    cc: number
    launchYear: number
  }

  type keyOfBike = keyof Bikes

  const owner: keyOfBike = "model"

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key]

  const user = {
    name: "Mr. A",
    email: "a@gmail.com",
    age: 25,
  }

  const car = {
    brand: "Tesla",
    model: "super v",
    launchYear: 2020,
  }

  const result = getPropertyValue(user, "age")
  const res = getPropertyValue(car, "brand")

  // 7. Constraint using key of
}
