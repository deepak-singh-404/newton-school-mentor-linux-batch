/*
this keyword

this JAVA
self  Python
*/

// this.name = "FIRSTNAME"


// //Fat arrow function
// const abc1 = () => {
//     this.name = "HEY"
//     console.log(this.name)
// }


// //Simple function
// function abc2() {
//     this.name = "MAMA"
//     console.log(this.name)
// }


// abc1()
// abc2()


// console.log(this)

// const fatArrowFunc = ()=>{
//     console.log(this)
// }


// function simpleFuc(){
//     this.a = "NAME"
//     console.log(this)
// }

// fatArrowFunc()  // => {}
// simpleFuc()    // => 



// function abc(a,b,c,d,e,f){
//     // get the last argument and console it
//     console.log(arguments[5])
// }

// const abc = (a)=>{
//     console.log(arguments)
// }


/*
keywords argument
*/


const abcd = (name = name, age = age) => {
    console.log(this)
    console.log("NAME", this.name)
    console.log("AGE", this.age)
}



abcd(age = 25, name = "DEEPAK SINGH")


/*

FAT ARROW VS SIMPLE

1- arguments
2- about this keyword (globale vs functional scope)
3- about keyword argumnet
*/


