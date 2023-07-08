// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	                return
// name equals owner 	    'Hello boss'
// otherwise 	            'Hello guest'

// function greet(name, owner) {
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }

// function greet(name, owner) {
//     switch (name) {
//         case owner:
//             return 'Hello boss'
//             break
//         default:
//             return 'Hello Guest'
//     }
// }

// console.log(greet('adam', 'adam'));

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest' 