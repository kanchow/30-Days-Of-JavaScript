// includes(): Takes a substring argument and checks if substring argument exists in the string.
// It returns a boolean (true or false).

let string = '30 Days Of JavaScript'
console.log(string.includes('Days'))   // true
console.log(string.includes('days'))   // false
console.log(string.includes('Script')) // true
console.log(string.includes('script')) // false
console.log(string.includes('java'))   // false
console.log(string.includes('Java'))   // true

let country = 'Finland'
console.log(country.includes('fin'))  // false
console.log(country.includes('Fin'))  // true
console.log(country.includes('land')) // true
console.log(country.includes('Land')) // false
