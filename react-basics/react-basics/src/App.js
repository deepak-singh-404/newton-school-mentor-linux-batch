import React, { useState } from "react";


const App = () => {
  const [uiData, setUiData] = useState("THIS IS MY FIRST APP")

  const clickHandler = () => {
    setUiData("PAPA")
  }

  return (<div>

    <h1>{uiData}</h1>
    <button onClick={clickHandler}>Click Me</button>
  </div>)
}



export default App