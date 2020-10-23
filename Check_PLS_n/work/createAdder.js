export function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
  
}

 const add5 = createAdder(5);