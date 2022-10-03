function makeGetRequest(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, {
                "method": "Get",
                "headers": {
                    'Content-Type': 'application/json'
                },
            })
            const jsonResponse = await response.json()
            resolve(jsonResponse)
        }
        catch (error) {
            reject(error)
        }
    })
}


function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos"
    makeGetRequest(url).then((data) => {
        console.log("DATA=======>", data)
    }).catch((error) => {
        console.log("ERROR====>", error.message)
    })
}