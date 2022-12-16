const data = [
    {
        "title":"TITLE 1",
        "price": 24
    },
    {
        "title":"TITLE 1",
        "price": 20
    },
    {
        "title":"TITLE 1",
        "price": 19
    },
    {
        "title":"TITLE 1",
        "price": 15
    },
    {
        "title":"TITLE 1",
        "price": 28
    },
]

let filteredData = data.filter((d)=> d.price < 20).map((d)=>d.title)

console.log(filteredData)