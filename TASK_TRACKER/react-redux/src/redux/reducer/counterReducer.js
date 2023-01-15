const initialState = {
    counter: 0,
    number: 5,
    admin: {},
    result: [],
    todos: []
}

/*
{
    "type": "",
    "payload": 
}
*/

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: action.payload
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: action.payload
            }
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }

}

export default counterReducer