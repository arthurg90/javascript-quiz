let changeServer = (player1, player2) => {
	let sum = player1 + player2
	if (sum%5 === 0) {
    	return true
    }
   return false
};

let result = changeServer(5, 0);
console.log("Expected: true, Actual: " + result);

result = changeServer(5, 3);
console.log("Expected: false, Actual: " + result);

result = changeServer(9, 6);
console.log("Expected: true, Actual: " + result);

result = changeServer(17, 8);
console.log("Expected: true, Actual: " + result);

result = changeServer(16, 8);
console.log("Expected: false, Actual: " + result);