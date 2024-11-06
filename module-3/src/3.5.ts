{
  // 5. Type guard using instanceof

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`Animal makes sound`)
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species)
    }
    makeMeow() {
      console.log(`${this.name} making sound meow meow`)
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species)
    }
    makeBark() {
      console.log(`${this.name} make ghew ghew sound`)
    }
  }

  const isCat = (animal: Animal) => {
    return animal instanceof Cat
  }

  const isDog = (animal: Animal) => {
    return animal instanceof Dog
  }

  const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
      return animal.makeMeow()
    } else if (isDog(animal)) {
      return animal.makeBark()
    } else {
      animal.makeSound()
    }
  }

  const cat = new Cat("Cat Vi", "Cat")
  const dog = new Dog("Dog Vi", "Dog")

  getAnimal(cat)

  // 5. Type guard using instanceof
}
