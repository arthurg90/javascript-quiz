//Write a function, longest, that takes an array of strings and returns the longest string:
//reduce array

let longest = words => {
	return words.reduce((longest, current) => {
		if (current.length > longest.length) {
			return current;
		}

		return longest;
    }, words[0]);
};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);

result = longest(["cat", "cattest", "catter"]);
console.log("Expected: cattest, Actual: " + result);




// let max = values => {
//     return values.reduce((biggest, current) => {
//         if (current > biggest) {
//             return current;
//         }

//         return biggest;
//     }, values[0]);
// };
