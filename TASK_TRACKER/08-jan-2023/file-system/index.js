const fs = require('fs')


//Relative path
//absolute path
const saveData = (data) => {
    console.log("START")
    fs.writeFileSync('./data.json', JSON.stringify(data))
    console.log("DONE")
}


const saveDataAsync = data => {
    console.log("START")
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log("SOME ERROR OCCURED", err.message)
        }
        console.log("FILE HAS BEEN WRITTEN")
    })
    console.log("DONE")
}

// const readData = () => {
//     const data = fs.readFileSync('./data.json', 'utf-8')
//     return data
// }

// saveData({
//     "userId": 1,
//     "name": "DEEPAK SINGH"
// })

saveDataAsync(
    {
        "userId": 1,
        "name": "DEEPAK SINGH"
    })

// console.log(readData())