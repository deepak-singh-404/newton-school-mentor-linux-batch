function getKeys(_obj){
    if(typeof(_obj) == "object" && !Array.isArray(_obj)){
        const keys = Object.keys(_obj)
        return keys.join(", ")
    }

}

let obj = {
    "email": "deepak.singh1@gmail.com",
    "password": "deepak"
}


console.log(getKeys(obj))
