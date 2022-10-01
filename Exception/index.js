// function anyFunction(number) {
//     return number * number
// }

function anyFunction2(arr) {
    let data;
    try {
        data = arr.reverse()
    }
    catch (err) {
        console.log("IN A CATCH BLOCK")
        console.log("ERROR MESSAGE=========>", err.message)
    }
    finally {
        console.log('IN A FINAL BLOKC')
        return data
    }

}

// const result = anyFunction({})

// console.log(result)




const res = anyFunction2(1)

console.log(res)


