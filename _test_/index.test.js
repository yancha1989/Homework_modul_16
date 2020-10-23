import { sum } from '../src/index.js'

xdescribe('Sum a + b', () => {

  it('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })
  
})