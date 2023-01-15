import React from "react";
import { useSelector } from 'react-redux'

const Counter = () => {
    const counterRoot = useSelector((s) => s.counterRoot)

    return <div>
        <h1>COUNTER: {counterRoot.counter} </h1>
    </div>
}

export default Counter