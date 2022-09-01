/*
String
Array/List/ArrayList
Object/ObjectLiteral/Hashmap
*/


/*
what are different datatypes in javascript? (7)
Number (int, float, double)
Symbol
Null
Undefined
String
Boolean
BigInt

Object  (array,hashmap)

JAVA => 
Int
float
double
Long
char
boolean


*/

/*
let, var, const/final
Loosely typed language (its datatype get defined in run time)

*/
// let a = "1"

// let b = new String()
// b = 1
// let c = new Array()
// let d = new Object()
// // b = "i am string but declared using instance of a string"

// // console.log(typeof(a))

// console.log(typeof(b), typeof(c), typeof(d))
// console.log(b)

//PRIMITIVE DATA TYPE
let a = "Deepak"
let b = new String()
b = "Deepak"

if(a === b){
    console.log("BOTH ARE SAME")
}
else{
    console.log("THEY ARE DIFFERENT")
}

/*
== vs ===

*/
let a1 = 1
let a2 = "1"

if(a1 === a2){
    console.log("BOTH ARE SAME")
}
else{
    console.log("THEY ARE DIFFERENT")
}


//OBJECT (store reference address)
let arr1 = [1]  //401
let arr2 = [1]  //402
if(arr1 == arr2){
    console.log("BOTH ARE SAME")
}
else{
    console.log("THEY ARE DIFFERENT")
}


let obj1 = {
    "name": "Deeapk"
}


if(Array.isArray(obj1)){
    console.log('IT IS AN ARRAY AND HERE IS THE FIRS ELEMENT', obj1[0])
}
else{
    console.log('SORRY IT IS NOT AN ARRAY')
}
