{
  // 3. Inheritance in OOP

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(hours: number) {
      console.log(`${this.name} will sleep ${hours} hours`)
    }
  }

  class Student extends Person {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public roll: number
    ) {
      super(name, age, address)
    }
  }

  const student = new Student("Mr. S", 24, "Bangladesh", 5)
  console.log(student)
  student.getSleep(6)

  class Teacher extends Person {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public designation: string
    ) {
      super(name, age, address)
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass} classes`)
    }
  }

  const teacher = new Teacher("Mr. T", 40, "Bangladesh", "Professor")
  console.log(teacher)
  teacher.getSleep(7)
  teacher.takeClass(4)

  // 3. Inheritance in OOP
}
