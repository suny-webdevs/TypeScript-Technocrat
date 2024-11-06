{
  // 9. Conditional Types

  type a1 = null
  type a2 = string

  type x = a1 extends null ? true : false
  type y = a2 extends undefined ? true : false

  type Sheikh = {
    car: string
    bike: string
    ship: string
  }

  type hasVehicle<T> = T extends keyof Sheikh ? true : false

  type hasCar = hasVehicle<"car">
  type hasBike = hasVehicle<"bike">
  type hasShip = hasVehicle<"ship">
  type hasPlane = hasVehicle<"plane">

  // 9. Conditional Types
}
