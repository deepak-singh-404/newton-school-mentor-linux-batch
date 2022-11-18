let data = [
    { "meal-time": "Lunch", "meal-name": "Deluxe thali" },
    { "meal-time": "Breakfast", "meal-name": "Idli1" },
    { "meal-time": "Breakfast", "meal-name": "Idli2" },
    { "meal-time": "Breakfast", "meal-name": "Idli3" }]


let breakFast = data.filter((a)=>a["meal-time"] == "Breakfast")

let lunch = data.filter((a)=>a["meal-time"] == "Lunch")
console.log(breakFast)

console.log(lunch)