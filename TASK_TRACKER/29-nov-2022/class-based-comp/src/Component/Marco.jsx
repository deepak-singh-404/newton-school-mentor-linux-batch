import React, { useState } from 'react'


const Marco = () => {

    const [data, setData] = useState(true)

    const clickHandler = () => {
        setData(!data)
    }

    return (

        <div id="main">

            <h1 id="marco-polo">{data ? "Marco" : "Polo"}</h1>

            <button id="marco-polo-toggler" onClick={clickHandler}>{data ? "Polo" : "Marco"}</button>

        </div>

    )

}

export default Marco;