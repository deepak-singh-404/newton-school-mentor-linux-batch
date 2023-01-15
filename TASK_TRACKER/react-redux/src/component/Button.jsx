import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/action/counterAction'

const Button = () => {
    const currentCounter = useSelector((s) => s.counterRoot.counter)

    const dispatch = useDispatch()

    const incClickHandler = () => {
        dispatch(incrementCounter(currentCounter + 1))
    }

    const decClickHandler = () => {
        dispatch(incrementCounter(currentCounter - 1))
    }

    return <div>
        <button onClick={incClickHandler}> INCREMENT</button>
        <button onClick={decClickHandler}>DECREMENT</button>
    </div>
}

export default Button