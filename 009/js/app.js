// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!


// function doubleChar(str) {
//     str = str.split('')
//     const newText = str.map(c => c + c)
//     return newText.join('')
// }

const doubleChar = str => str.split('').map(c => c + c).join('')