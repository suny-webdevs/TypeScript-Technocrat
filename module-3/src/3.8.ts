{
  // 8. Statics in OOP

  // static is used for reduce memory usage

  class Counter {
    static count: number = 0
    static increment() {
      return (Counter.count += 1)
    }
    static decrement() {
      return (Counter.count -= 1)
    }
  }

  //   const instance1 = new Counter()
  console.log(Counter.increment())
  console.log(Counter.increment())
  console.log(Counter.decrement())
  console.log(Counter.decrement())

  // 8. Statics in OOP
}
