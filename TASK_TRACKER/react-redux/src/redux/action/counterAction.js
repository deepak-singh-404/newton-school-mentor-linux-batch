import axios from "axios"

export const incrementCounter = (data) => {
    return {
        "type": "INCREMENT_COUNTER",
        "payload": data
    }
}

export const decrementCounter = (data) => {
    return {
        "type": "DECREMENT_COUNTER",
        "paylaod": data
    }
}


export const addTodos = (data) => {
    return {
        "type": "SET_TODOS",
        "payload": data
    }
}

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                "method": "Get",
                "url": "https://jsonplaceholder.typicode.com/todos"
            })
            dispatch(addTodos(data))
        }
        catch (err) {
            console.log("SOME EXCEPTION OCCURED", err.message)
        }
    }
}