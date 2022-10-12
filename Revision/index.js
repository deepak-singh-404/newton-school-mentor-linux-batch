//callback is anon



function greetMeAfterGivenTime(time, cb) {
    setTimeout(() => {
        cb()
    }, time)
}


// greetMeAfterGivenTime(5000, () => {
//     console.log("HELLO EVERYONE")
// })



// function a(time, cb) {
//     return setTimeout(() => {
//         cb()
//     }, time)
// }

// a(2000, () => {
//     console.log("HELLO")
// })




function abc() {
    return () => {
        return (a) => {
            return a + a
        }
    }
}

const res = abc()()(2)
console.log(res)



// const a = setTimeout(() => {
//     console.log("LAST DEMO")
// }, 1000)
// console.log(a)

