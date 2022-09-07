
//what is typeof array?



// console.log(typeof arr)

//object




//filter out all the odd number

// for (var i = 0; i<arr.length; i++){
//     if(arr[i] % 2 != 0){
//         console.log(arr[i])
//     }
// }

//higher order method
/*
Map
Filter
findIndex
indexOf
splice
slice
reduce
find
*/

//Will take function as a argument
//it will call same function for each element present in the array

const myFunc = (number)=>{
    if(number %2 !==0){
        return number
    }
}

//anonymous function
//function
//declration/defination
//invocation

let arr = [1,2, 3,4,5]

//filter
let filtered_result = arr.filter((n)=>{
    if(n %2 !==0){
        return n
    }
})


//find
// i have to check whether 3 is available or not if available return 3 else undefined/null

let data = arr.find((e)=>{
    if(e == 31){
        return e;
    }
})


// console.log(filtered_result)
// console.log(data)


//findIndex
//return the index of the element and if not present it will return -1

const index = arr.findIndex(function(e){
    if(e == 3){
        return e;
    }
})

console.log(index)

const index2 = arr.indexOf(3)

console.log(index2)



// console.log(index)



let mappedData = arr.map((e)=>{
    return e.toString() + " HELLO PAPA";
})


console.log(mappedData)



let arr2 = [1,2,3]

arr2.unshift(0)

console.log(arr2)



//talks about git