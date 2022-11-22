import React, { useState } from "react";
import ParentComponent from "./component/ParentComponent/ParentComponent";
import LifeCycle from "./component/LifeCycle/LifeCycle";
import Toggle from "./component/Toggle/Toggle";


const App = () => {
  // const [uiData, setUiData] = useState("THIS IS MY FIRST APP")

  // const clickHandler = () => {
  //   setUiData("PAPA")
  // }

  return (<>
    {/* <ParentComponent /> */}
    {/* <LifeCycle /> */}
    <Toggle />
  </>)
}



export default App