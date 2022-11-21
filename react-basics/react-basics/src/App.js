import React, { useState } from "react";
import ParentComponent from "./component/ParentComponent/ParentComponent";
import LifeCycle from "./component/LifeCycle/LifeCycle";


const App = () => {
  // const [uiData, setUiData] = useState("THIS IS MY FIRST APP")

  // const clickHandler = () => {
  //   setUiData("PAPA")
  // }

  return (<>
    {/* <ParentComponent /> */}
    <LifeCycle />
  </>)
}



export default App