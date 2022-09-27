function register() {
    let data = { "name": "User103", "email": "user103@gmail.com", "password": "user", "phoneNumber": 1234568880 }
    saveDate(data).then((responseData) => {
        console.log("Promise fulfilled===>", responseData)
    }).catch((error) => {
        console.log("Promise unfullfiled==>", error.message)
    })
    //alert("Its working man")
}


//Generic function which return promise
//promise will get fulfilled =>  Data has been saved successfully in the database. ==> resolved
//promise will not get fulfilled => Date failed to save in database    ==> rejected 
function saveDate(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://expense-tracker-service.herokuapp.com/api/v1/user/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            resolve(response);
        }
        catch (error) {
            reject(error)
        }
    })
}


//promise take function as an argument
/*
function might be sync or async
but in 99 % function will be async.

above function will take two arg resolve, reject
1- fullfil
2- not fulfill
*/
