import React from "react";
import Card from './Card'


let data = [{ "name": "Printers", "price": "3999", "description": "HP" },
{ "name": "Pen", "price": "399", "description": "Montex" },
{ "name": "Pencil", "price": "34", "description": "Nataraj" },
{ "name": "Bag", "price": "399", "description": "Lenovo" }
]





const ParentComponent = () => {
    return (<>
        <h3>This is the bunch of cards</h3>
        {data.map(d =>
            <Card cardDetails={d}/>
        )}

    </>)
}


export default ParentComponent