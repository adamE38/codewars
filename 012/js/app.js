// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input == null) return []
    if (input.filter(n => n != 0).length < 1) return []

    let positiveCount = 0
    let negativeSum = 0

    input.forEach(num => {
        if (num > 0) positiveCount++
    })

    input.forEach(num => {
        if (num < 0) negativeSum += num
    })

    return [positiveCount, negativeSum]
}

console.log(countPositivesSumNegatives([]));
