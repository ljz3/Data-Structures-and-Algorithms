// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let reverse = ''
	let reverseNum = 0

	let str = n.toString()

	if(n < 0){
		str = str.substring(1)
	}
	for(let i = 0; i < str.length; i++){
		reverse = reverse.concat(str[str.length-i-1])
	}
	if(n < 0){
		reverse = '-'.concat(reverse)
	}
	reverseNum = parseInt(reverse)
	return reverseNum
}

module.exports = reverseInt;
