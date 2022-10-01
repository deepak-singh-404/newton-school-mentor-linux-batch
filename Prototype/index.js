const vehicle = {

    name: "",

    type: "",

    wheelCount: "",
}


function makeCar(name, wheelCount) {
    // let _vehicle = new vehicle
    // _vehicle.name = name
    // _vehicle.type = "Car"
    // _vehicle.wheelCount = wheelCount
    // return _vehicle
    return {
        ...vehicle,
        type: "Car",
        name: name,
        wheelCount: wheelCount
    }
}

function makeBike(name, wheelCount) {
    return {
        ...vehicle,
        type: "Bike",
        name: name,
        wheelCount: wheelCount
    }
}

const car = new makeCar("Swift", 4)
const bike = new makeBike("RE", 2)


console.log('CAR ==========>', car)
console.log(car)
// console.log("BIKE =========>", bike)
// console.log(bike.__proto__)