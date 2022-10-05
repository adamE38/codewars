// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

let midChar = word => {
    if(word.length % 2 === 0){
        return word[Math.round(word.length / 2 - 1)] + word[Math.round(word.length / 2)]
    }else{
        return word[Math.round(word.length / 2 - 1)]
    }
}

midChar('adam')