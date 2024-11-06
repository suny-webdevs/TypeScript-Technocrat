{
  // 6. Constraints in typeScript

  const addCourseToStudent = <
    T extends { name: string; email: string; age: number }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development"
    return {
      ...student,
      course,
    }
  }

  const student1 = addCourseToStudent({
    name: "Sunny",
    age: 24,
    email: "sunny@gmail.com",
    devType: "Full Stack Web Developer",
    technologies: ["React", "Node", "Express", "Mongo DB"],
  })
  console.log(student1)

  // 6. Constraints in typeScript
}
