// match(): Takes a substring or regular expression pattern as an argument and returns an array if there is a match, otherwise it returns null.

// Let us see what a regular expression pattern looks like.
// It starts with a / sign and ends with a / sign.
let string = 'love'
let patternOne = /love/   // without any flag
let patternTwo = /love/gi // g means to search the whole text, i means case-insensitive.

/*
  Syntax:

  string.match(substring)
*/

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
/*
  Output

  ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/

let pattern = /love/gi
console.log(string.match(pattern)) // ["love", "love", "love"]

// Let us extract numbers from text using a regular expression.
// This is not the regular expression section, so don't panic.

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I\'m super excited to start this challenge.'
let regEx = /\d/g
// \d is an escape sequence that matches any digit (0-9).
// The + quantifier means "one or more" of the preceding element, so \d+ matches one or more digits.
// The g flag (global) makes the search find all matches in the string, not just the first one.
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
