import { countDown } from './countDown.js'

xdescribe('test for counDown function', () => {
    it('countDown(n) expect n, n >= 1, --n ', () => {
        
       expect(countDown(3)).toBe(3, 2, 1) 

    });
});