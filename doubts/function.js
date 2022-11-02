/*
1) Write a sum method which can be invoked either ways.

a. console.log(sum(2,3)); // Outputs 5

b. console.log(sum(2)(3)); // Outputs 5
*/


// function sum(a, b, c) {
//     console.log("1", arguments)
//     return a + b
// }


// function _sum(a) {
//     console.log("2", arguments)
//     return (b) => {
//         return a + b
//     }
// }


// console.log(sum(2, 3))

// console.log(_sum(2)(3))

function sum(...b) {

    if (b.length > 1) {

        return b.reduce((acc, curr) => acc += curr, 0)

    }

    else {

        return (c) => {

            return b[0] + c;

        }
    }
}


console.log(sum(2,3,4,5))
