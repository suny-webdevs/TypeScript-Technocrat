{
  // 4. Generics with Interfaces

  interface Developer<T, B = null> {
    name: string
    computer: boolean
    smartWatch: T
    bike?: B
  }

  interface PoorWatch {
    brand: string
    model: string
    display: string
  }

  interface RichWatch {
    brand: string
    model: string
    display: string
    feature: {
      bp: boolean
      sleepTrack: boolean
      heartRateMonitor: boolean
      footStepTracker: boolean
    }
  }

  const poorDev: Developer<PoorWatch> = {
    name: "John Doe",
    computer: true,
    smartWatch: {
      brand: "China",
      model: "Watch",
      display: "LED",
    },
  }
  interface Bike {
    brand: string
    model: string
    cc: number
    color: string
  }

  const richDev: Developer<RichWatch, Bike> = {
    name: "Jane Doe",
    computer: true,
    smartWatch: {
      brand: "Apple",
      model: "Watch",
      display: "OLED",
      feature: {
        bp: true,
        sleepTrack: true,
        heartRateMonitor: true,
        footStepTracker: true,
      },
    },
    bike: {
      brand: "Royal Enfield",
      model: "Classic",
      cc: 350,
      color: "Gun Metal Gray",
    },
  }

  // 4. Generics with Interfaces
}
