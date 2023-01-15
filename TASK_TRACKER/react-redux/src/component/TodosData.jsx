import React from "react";
import { useSelector } from 'react-redux'

const TodosData = () => {
    const store = useSelector((s) => s.counterRoot)

    return (<>
        {console.log("STORE-=========-", store)}
        <h3>ALL TODOS</h3>
    </>)
}

export default TodosData