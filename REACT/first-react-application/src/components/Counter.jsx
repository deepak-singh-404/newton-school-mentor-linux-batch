import React, { useState } from "react"

/*
File name should start from the capital letter
Function name should be as same as file name (General pattern)
*/


const Counter = () => {
    const [count, setCount] = useState(0)

    const substractHelper = () => {
        setCount(count - 1)
    }

    const addHelper = () => {
        setCount(count + 1)
    }


    /*

    useState hook return two thing 1- property, 2- fuction/method to chage that property
    */

    return (<div>
        <h1>FUNCTIONAL BASED COMPONENT</h1>
        <h1>{count} </h1>
        <button onClick={substractHelper}>Substract</button>
        <button onClick={addHelper}>Add</button>
    </div>)
}

export default Counter