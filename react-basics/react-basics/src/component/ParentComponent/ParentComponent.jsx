import React, { useState } from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

const ParentComponent = () => {
    const [parentData, setParentData] = useState("THIS IS PARENT COMPONENT")
    const [childData, setChildData] = useState("THIS IS CHILD COMPOENT")

    return (<div>
        <h1>{parentData}</h1>
        <ChildComponent childData={childData} setChildData={setChildData} />
    </div>)
}


export default ParentComponent