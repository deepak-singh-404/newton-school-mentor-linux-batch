
console.log("ITS LOG")
console.warn("ITS WARNING")
console.error("ITS ERROR")
/*

data: 
ttl: 

function
key:
value:
ttl:

*/

function localStorageHelper(key, value, ttl) {

    // Set this data in localstorage
    localStorage.setItem(key, JSON.stringify(value))

    // Code for data removal
    setTimeout(() => {
        localStorage.removeItem(key)
    }, ttl)

}

localStorageHelper("user_details", {
    "id": 1,
    "name": "Rajesh",
    "age": 24
}, 2000000)

/*
JS object  => JSON.stringify() => strigified data
{
    id: 1,
    name: "Deepak Singh"
}

===> JSON.stringify()

{
    "id": 1,
    "name": "Deepak Singh"
}

stingified data => JSON.parse()  => JS object
 
{
    "id": 1,
    "name": "Deepak Singh"
}

===> JSON.parse()
{
    id: 1,
    name: "Deepak Singh"
}
*/


const data = localStorage.getItem("user_details")
const parsedData = JSON.parse(data)

console.log(parsedData.name)



/*
name: "Deepak Singh"
college: "XYZ"
*/
