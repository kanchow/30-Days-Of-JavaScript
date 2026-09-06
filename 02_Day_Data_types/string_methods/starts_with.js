// startsWith(): Takes a substring as an argument and checks if the string starts with that specified substring.
// It returns a boolean (true or false).

/*
  Syntax:

  string.startsWith(substring)
*/

let string = 'Love is the best to in this world'
console.log(string.startsWith('Love'))  // true
console.log(string.startsWith('love'))  // false
console.log(string.startsWith('world')) // false

let country = 'Finland'
console.log(country.startsWith('Fin'))  // true
console.log(country.startsWith('fin'))  // false
console.log(country.startsWith('land')) //  false
