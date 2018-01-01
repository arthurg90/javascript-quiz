//Write a function, minmax, that takes an array of numbers and returns the smallest value plus the largest value in the array:

let minmax = values => {
    let max = values[0];
    let min = values[0] + max;

    for (let i = 0; i < values.length; i += 1) {
    	if (values[i] > max ) {
    		max = values[i];
    	}
    	if (values[i] < min) {
    		min = values[i];
    	}
    }

    return max + min;
};

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4 
console.log("Expected: 8, Actual: " + result);


