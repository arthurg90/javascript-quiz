//recursive function

let sumToN = n => {
	if (n <= 1) {
		return 1;
	}
	if (n >= 123456789) {
		return true
	}
	return n + sumToN(n - 1);
	
};


let result = sumToN(4);
console.log("Expected: 10, Actual: " + result);

result = sumToN(100);
console.log("Expected: 5050, Actual: " + result);

result = sumToN(123456789); // true
console.log("Expected: 7620789436823655, Actual: " + result);