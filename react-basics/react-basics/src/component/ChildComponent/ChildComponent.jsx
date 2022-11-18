import React from "react";

const ChildComponent = ({ childData, setChildData }) => {
    const mama = () => {
        setChildData("THIS CHILD COMPONENT DATA HAS BEEN CHANGED")
    }
    return (<div>
        <h4>{childData}</h4>
        <button onClick={mama}> Click me</button>
    </div>)
}


export default ChildComponent