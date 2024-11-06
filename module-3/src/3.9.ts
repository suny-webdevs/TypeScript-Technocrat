{
  // 9. Polymorphism

  class Person {
    getSleep(): void {
      console.log(`A man need to sleep for 8 hours`)
    }
  }
  class Teacher extends Person {
    getSleep(): void {
      console.log(`A teacher need to sleep for 7 hours`)
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log(`A student need to sleep for 6 hours`)
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`A developer need to sleep for 5 hours`)
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep()
  }

  const person = new Person()
  const teacher = new Teacher()
  const student = new Student()
  const developer = new Developer()

  getSleepingHours(person)
  getSleepingHours(teacher)
  getSleepingHours(student)
  getSleepingHours(developer)

  class Shape {
    getArea(): number {
      return 0
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super()
    }
    getArea(): number {
      return parseFloat((Math.PI * this.radius * this.radius).toFixed(2))
    }
  }

  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super()
    }
    getArea(): number {
      return this.height * this.width
    }
  }

  const getShapesArea = (param: Shape) => {
    console.log(param.getArea())
  }

  const circle = new Circle(45)
  const rectangle = new Rectangle(20, 40)

  getShapesArea(circle)
  getShapesArea(rectangle)

  // 9. Polymorphism
}
