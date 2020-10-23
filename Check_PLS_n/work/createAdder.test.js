import { createAdder } from './createAdder.js'

xdescribe('test for createAdder function', () => {
    
    it('createAdder(a) function, return addA function that return a + b ', () => {    
    expect(createAdder(5)).toBe(10) 
    })
})