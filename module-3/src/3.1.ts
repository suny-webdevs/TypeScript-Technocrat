{
  // 1. Introduction of Object Oriented Programming & 2. Class and object

  class Student {
    constructor(
      public name: string,
      public email: string,
      public age: number
    ) {}
    welcome() {
      console.log(
        `Hello ${this.name}(${this.age}). Welcome to your profile. We sent you a email to your email address ${this.email}`
      )
    }
  }

  const student1 = new Student("Sunny", "sunny@gmail.com", 24)
  student1.welcome()

  // 1. Introduction of Object Oriented Programming & 2. Class and object
}
