import React from "react";


const App = () => {

  let randomNumber = Math.random().toFixed(2)

  let data = [{
    name: "Deepak"
  }
]

  return (
    <div>
      <h1>APP ({randomNumber})</h1>
      {/* <h1>{data[0].name}</h1>
      <h1>{data[1].name}</h1> */}


      {data.map((d)=>
        <h1>{d.name}</h1>
      )}




    </div>
  )

}



export default App