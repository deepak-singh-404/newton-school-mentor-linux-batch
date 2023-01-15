import React from "react";
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../redux/action/counterAction'

const ApiFetchButton = () => {
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(fetchTodos())
    }
    return (<>
        <button onClick={clickHandler}>FETCH TODOS</button>
    </>)
}

export default ApiFetchButton