import { getPercents } from "../src/getPercent.js"

xdescribe("getPercents function", () => {

  it("20% of 300 equals 60", () => {
    const number = 200, percent = 30, result = 60
    expect(getPercents(percent, number)).toBe(result)
  })

  it("0% equals 0", () => {
      const number = 200, percent = 0, result = 0
      expect(getPercents(percent, number)).toBe(result)
  })
  
})