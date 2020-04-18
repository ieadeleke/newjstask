const myFunction = params => {

	const newArray = [];

	for(let i = 1; i <= params; i++) {

		if((i % 2 === 0) && (i % 3 === 0) ) {
			newArray.push('yu-gi');
		} else if ((i % 3 === 0) && (i % 5 === 0)) {
			newArray.push('gi-oh');
		}  else if ((i % 2 === 0) && (i % 5 === 0)) {
			newArray.push('yu-oh');
		}  else if ((i % 3 === 0) && (i % 5 === 0) && (i % 2 === 0)) {
			newArray.push('yu-gi-oh');
		}  else if (i % 2 === 0) {
			newArray.push('yu');
		}  else if (i % 3 === 0) {
			newArray.push('gi');
		}  else if (i % 5 === 0) {
			newArray.push('oh');
		}  else{
			newArray.push(i);
		}  
	}
	return newArray;

}
console.log(myFunction(100));
console.log(myFunction(20));
