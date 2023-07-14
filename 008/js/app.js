// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
    const numArr = numbers.split(' ').map(n => Number(n))
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

console.log(highAndLow('1 2 3 4 5'));

const hiAndLo = num => `${Math.max(...num.split(' ').map(n => Number(n)))} ${Math.min(...num.split(' ').map(n => Number(n)))}`