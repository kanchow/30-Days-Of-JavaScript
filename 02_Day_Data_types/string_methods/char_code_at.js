// charCodeAt(): Takes an index and returns the char code (ASCII number) of the value at that index.

/*
  Syntax:

  string.charCodeAt(index)
*/

let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII code is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII code is 116
