//Write function that translates a string to Pig Latin. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
//take first letter and put in on the end of the string, then add "ay"
//needs to loop over every word in string
//map function 

let pigLatin = str => {
    let arr = str.split(" ");

    return arr.map(word => {
    	let first = word.substr(0, 1).toLowerCase();
    	let rest = word.substr(1);

    	return rest + first + "ay";
    }).join(" ");
};

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

result = pigLatin("The secret plans are in the bunker");
console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);

/*
let pigLatin = str => {
    let words = str.split(" "); // .split turns string to array
    	
    let pigged = words.map(word => {
    	//word = "The"
		let head = word.substr(0, 1).toLowerCase();
		let tail = word.substr(1);

		return tail + head + "ay";

    });

    return pigged.join(" ");		// .join turns array to string with " " space 

};

*/