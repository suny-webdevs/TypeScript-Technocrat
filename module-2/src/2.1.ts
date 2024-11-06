{
  //

  // 1. Type assertion
  const kgToGm = (value: number | undefined): number | undefined => {
    if (typeof value === "number") {
      return value * 1000
    } else {
      throw new Error("Invalid input. Please provide a number.")
    }
  }

  const result1 = kgToGm(50) as number
  const result2 = kgToGm(undefined) as undefined

  //
}
