let arr = [1, 2, 1]

let map = {}

for (var i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
        map[arr[i]] = map[arr[i]] + 1
    }
    else {
        map[arr[i]] = 1
    }
}


// console.log(map)

// console.log(Object.keys(map))
// console.log(Object.values(map))

// console.log(Object.entries(map))

let entries = Object.entries(map)

for (var j = 0; j < entries.length; j++) {
    if (entries[j][1] === 1) {
        console.log(entries[j][0])
    }
}