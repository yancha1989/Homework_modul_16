import { repeatWord } from "../src/repeatWord.js"

describe("repeatWord function", () => {

  it("word repeated required number of times", () => {
    expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3, ')
    expect(repeatWord('слово', 2)).toBe('слово1, слово2, ')
  })

})