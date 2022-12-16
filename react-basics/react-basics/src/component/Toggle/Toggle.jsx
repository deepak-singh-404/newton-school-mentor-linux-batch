import React, { useEffect, useState } from "react";


const Toggle = () => {
    const [toHide, setToHide] = useState("block")
    let [number, setNumber] = useState(2)

    const [state, setState] = useState("ON")

    useEffect(() => {
        setInterval(() => {
            number = number + 1
            setNumber(number)
        }, 1000)
    }, [])






    useEffect(() => {
        if (number % 2 == 0) {
            setState("ON")
        }
        else {
            setState("OFF")
        }
    }, [number])

    // useState(() => {
    //     setInterval(() => {
    //         console.log("PAPA")
    //         if (state == "ON") {
    //             console.log("IF")
    //             setState("OFF")
    //         }
    //         else {
    //             console.log("ELSE")
    //             setState("ON")
    //         }
    //     }, 1000)

    // })


    //Definition
    const clickHandler = () => {
        if (toHide === "block") {
            setToHide("none")
        }
        else {
            setToHide("block")
        }
    }

    return (<>
        <div>
            <h3>LETS LEARN TOGGLE</h3>
            {console.log("NUMBER", number)}
            <h1>{number % 2 == 0 ? "ON" : "OFF"}</h1>
            {console.log("I AM RENDERING")}

            {/* <h1 style={{ display: toHide }}>OBJECT</h1>

            {/* {!toHide && <h1>OBJECT</h1>} */}

            {/* <button onClick={clickHandler}>Toggle</button> */}
        </div>
    </>)
}

export default Toggle

/*
const a = clickHandler()
console.log(a)
*/