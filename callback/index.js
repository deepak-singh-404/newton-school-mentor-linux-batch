//
const fetchApi = (time, cb) => {
    setTimeout(() => {
        cb()
    }, time)
}


const main = () => {
    let time = 4000
    fetchApi(4000, () => {
        console.log(`Hey ${time} has been passed.`)
        console.log(`what to do next?`)
    })
}

main()

/*
p
*/