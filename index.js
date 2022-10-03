console.log("FIRST")

setTimeout(() => {
    console.log("I AM FROM SET TIMEOUT")
}, 0)


console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")
console.log("THIRD")

/*
FIRST
I AM FROM SET TIMEOUT
THIRD

FIRST
THIRD
I AM FROM SET TIMEOUT
*/

/*
1- Javacript is a single thread lang
2- single thread => one thing at a time
3- javascript is synchronous and blocking
4- but beacuse of event it hadnle async request and becomes non blocking
5- event loop help us to let exceute all synchronous code first and then asynchrnous
*/