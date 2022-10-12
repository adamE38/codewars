// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

const fakeBin = str => {
    let arr = []
    str.split('').forEach(x => {
        if(x < 5){
            arr.push(0)
        }else{
            arr.push(1)
        }
    })
    return arr.join('')
}