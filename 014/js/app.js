// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    const strArr = str.split(' ')
    const result = []
    strArr.forEach(word => {
        result.push(word.split('').reverse('').join(''))
    })
    return result.join(' ')
}

console.log(reverseWords('This is a test'));