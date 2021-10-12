// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reverse = ''
	for(let i = 0; i < str.length; i++){
		reverse = reverse.concat(str[str.length-i-1])
	}
	return reverse
}

module.exports = reverse;
