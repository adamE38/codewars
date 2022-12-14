// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

const summation = num => {
    let total = 0
    for (let i = 1; i < num + 1; i++) {
        total += i
    }
    return total
}