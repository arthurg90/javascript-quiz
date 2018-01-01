//create a function that makes an array from a number 
//.push method

let monkeys = count => {
    let arr = [];
    for (let i = 0; i < count; i += 1) {
    	arr.push('monkey');
    }

    return arr
};

let result = monkeys(4);
console.log("Expected: [ 'monkey', 'monkey', 'monkey', 'monkey' ], Actual: ", result);

result = monkeys(2);
console.log("Expected: [ 'monkey', 'monkey' ], Actual: ", result);