import React, { useState } from "react";

const Toggle = () => {
    const [toHide, setToHide] = useState("block")

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

            <h1 style={{ display: toHide }}>OBJECT</h1>

            {/* {!toHide && <h1>OBJECT</h1>} */}

            <button onClick={clickHandler}>Toggle</button>
        </div>
    </>)
}

export default Toggle