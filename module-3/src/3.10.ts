{
  // 10. Abstraction in OOP

  interface Car {
    startEngine(): void
    stopEngine(): void
    move(): void
  }

  class Car implements Car {
    startEngine(): void {
      console.log(`Start engine`)
    }
    stopEngine(): void {
      console.log(`Stop engine`)
    }
    move(): void {
      console.log(`Move car`)
    }
  }

  const toyota = new Car()
  toyota.startEngine()
  toyota.move()
  toyota.stopEngine()

  abstract class Bike {
    abstract startEngine(): void
    abstract move(): void
    abstract stopEngine(): void
  }

  class HeroBikes extends Bike {
    startEngine(): void {
      console.log(`Start bike`)
    }
    move(): void {
      console.log(`Move bike`)
    }
    stopEngine(): void {
      console.log(`Stop bike`)
    }
  }

  const heroSpelenderPlus = new HeroBikes()
  heroSpelenderPlus.startEngine()
  heroSpelenderPlus.move()
  heroSpelenderPlus.stopEngine()

  // 10. Abstraction in OOP
}
