let max3 = (a, b, c) => {
    if (a > b && a > c) {
    	return a
    } 
    if (b > a && b > c) {
    	return b
    }
return c

};

let result = max3(1, 2, 3);
console.log("Expected: 3, Actual: " + result);

result = max3(3, 1, 2);
console.log("Expected: 3, Actual: " + result);

result = max3(2, 3, 1);
console.log("Expected: 3, Actual: " + result);

result = max3(7, -7, 14);
console.log("Expected: 14, Actual: " + result);

result = max3(-128, 128, 0);
console.log("Expected: 128, Actual: " + result);