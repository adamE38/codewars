// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let digitize = n => n.toString().split('').reverse().map(num => Number(num))
