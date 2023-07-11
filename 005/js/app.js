// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//     const strArr = str.split('')
//     strArr.pop()
//     strArr.shift()
//     return strArr.join('')
// };

function removeChar(str) {
    const strArr = str.split('')
    const result = []
    strArr.forEach((e, i) => {
        if (i === 0) {
            return
        } else if (i === strArr.length - 1) {
            return
        } else {
            result.push(e)
        }
    })
    return result.join('');
};


console.log(removeChar('Adam'));

