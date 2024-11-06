{
  // 8. Asynchronous typeScript

  interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  const getTodo = async (): Promise<Todo> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const res = await data.json()
    return res
    // console.log(res)
  }

  getTodo()

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something"
      if (data) return resolve(data)
      else {
        reject("Failed to load data!")
      }
    })
  }

  const loadData = async (): Promise<string> => {
    const data: string = await createPromise()
    return data
    // console.log(data)
  }

  loadData()

  // 8. Asynchronous typeScript
}
