{
  // 10. Mapped types

  const numbers: number[] = [1, 2, 3, 4, 5]
  const stringsOfNumbers: string[] = numbers.map((number) => number.toString())
  console.log(stringsOfNumbers)

  type AreaNumbers = {
    width: number
    height: number
  }

  type AreaStrings = {
    [key in keyof AreaNumbers]: string
  }

  type AreaDynamic<T> = {
    [key in keyof T]: T[key]
  }

  const area1: AreaDynamic<{ width: string; height: number }> = {
    width: "100",
    height: 100,
  }

  console.log(area1)

  // 10. Mapped types
}
