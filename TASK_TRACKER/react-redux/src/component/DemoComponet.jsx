import React from "react";
import { useSelector } from 'react-redux'


const DemoComponent = () => {
    const store = useSelector((s) => s.counterRoot)
    return (<>
        <h1>HEY I AM DEMO COMPONENT {store.counter < 0 ? 0 : store.counter}</h1>
    </>)

}

export default DemoComponent