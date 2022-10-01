let obj = {
    "name": "Yuvraj",
    "age": 25,
    "address": {
        "street": "A401",
        "location": {
            "latitude": "24.56",
            "longitude": "2152.11",
            "key": {

            }
        }
    }
}


console.log(obj.name.address)
/*
"obj.name.address" => "invalid"
"obj.name" => valid
"obj.address" => valid
"ob.address.location.latitude" => valid
*/
