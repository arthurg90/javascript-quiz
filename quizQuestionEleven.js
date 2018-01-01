//You should be able to give the monkey a name when you create it.
// The monkey should have a .getName() method that returns its name
// The monkey should have a .sayHelloTo(monkey) method that you pass another monkey to and it will return a greeting
// The monkey should have a .giveBanana() method 
//The monkye should have a .howManyBananas() method - howManyBananas() should return the number of bananas the monkey has been given



class Monkey {
	constructor(name, bananas) {
		this.name = name;
		this.bananas = 0;
}

	getName() {
		return this.name;
	}

	sayHelloTo(monkey) {
		return "Hello " + monkey.getName(); 
		
	}

	giveBanana() {
		return this.bananas += 1;
	}

	howManyBananas() {
		return this.bananas;
	}	

};

let m1 = new Monkey("Seb");
let m2 = new Monkey("Mia");

let m1Name = m1.getName();
console.log("Expected: Seb, Actual: " + m1Name);

let greeting = m1.sayHelloTo(m2);
console.log("Expected: Hello Mia, Actual: " + greeting);

m1.giveBanana();
console.log("Expected: 1, Actual: " + m1.howManyBananas());

m2.giveBanana();
m2.giveBanana();
m2.giveBanana();
console.log("Expected: 3, Actual: " + m2.howManyBananas());