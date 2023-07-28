
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

// Example

// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

// So the maximum value that you can obtain is 9.

function expressionMatter(a, b, c) {
    const comboA = a + b + c
    const comboB = a + b * c
    const comboC = a * b + c
    const comboD = a * b * c
    const comboE = a * (b + c)
    const comboF = (a + b) * c
    const comboG = a * b + c
    const results = [comboA, comboB, comboC, comboD, comboE, comboF, comboG]
    return Math.max(...results)
}