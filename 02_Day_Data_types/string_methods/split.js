// split(): The method splits a string into an array by a specified separator.

let string = '30 Days Of JavaScript'
console.log(string.split())    // ["30 Days Of JavaScript"]
console.log(string.split(' ')) // ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'
console.log(firstName.split())   // ["Asabeneh"]
console.log(firstName.split('')) // ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
