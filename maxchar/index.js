// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	const map = new Map()
	for(let i = 0; i < str.length; i++){
		map.get(str[i]) === undefined ? map.set(str[i], 1) : map.set(str[i], map.get(str[i]) + 1)
	}

	let numChar = 0
	let currentChar = ''

	for (let [key, value] of map) {
		if(value > numChar){
			numChar = value
			currentChar = key
		}
	}

	return currentChar
}

module.exports = maxChar;
