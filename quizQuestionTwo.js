// function to multiply x by y
//can't use * or /
// use a sum of x (y times) (5, 3) 5+5+5


let multiply = (x, y) => {
	let sum = 0;

    for(i = 0; i < y; i += 1) {
    	sum += x;
    }

    return sum;

};
        

let result = multiply(5, 0);
console.log("Expected: 0, Actual: " + result);

result = multiply(5, 3);
console.log("Expected: 15, Actual: " + result);

result = multiply(9, 6);
console.log("Expected: 54, Actual: " + result);

result = multiply(17, 8);
console.log("Expected: 136, Actual: " + result);

result = multiply(16, 8);
console.log("Expected: 128, Actual: " + result);



