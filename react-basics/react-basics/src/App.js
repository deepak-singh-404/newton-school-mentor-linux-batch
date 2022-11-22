import React, { useState } from "react";
import ParentComponent from "./component/ParentComponent/ParentComponent";
import LifeCycle from "./component/LifeCycle/LifeCycle";
import Toggle from "./component/Toggle/Toggle";
import Search from "./component/Search/Search";


const App = () => {
  // const [uiData, setUiData] = useState("THIS IS MY FIRST APP")

  // const clickHandler = () => {
  //   setUiData("PAPA")
  // }

  return (<>
    {/* <ParentComponent /> */}
    {/* <LifeCycle /> */}
    {/* <Toggle /> */}
    <Search />
  </>)
}



export default App