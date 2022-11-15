import React from 'react'

let Card = ({ cardDetails }) => {

    return <div>
        <h1>{cardDetails.name}</h1>
        <h2>{cardDetails.price}</h2>
        <h3>{cardDetails.description}</h3>
        <hr></hr>
    </div>
}

export default Card