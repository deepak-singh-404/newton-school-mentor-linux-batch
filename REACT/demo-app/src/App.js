import React,{useState} from "react";


const App = () => {
  //hook
  //hooks return two things, first where the data has been stored and second the function which help us to changew data
  let [counter, setCounter] =  useState(0)

  //State


  const increaseCounter = ()=>{
    setCounter(counter + 1)
    console.log("counter",counter)
  }
  const decreaseCounter = () =>{
    setCounter(counter - 1)
    console.log("counter", counter)
  }

//   let randomNumber = Math.random().toFixed(2)

//   let data = [{
//     name: "Deepak"
//   }
// ]

  return (
    <div>
      {/* <h1>APP ({randomNumber})</h1> */}
      {/* <h1>{data[0].name}</h1>
      <h1>{data[1].name}</h1> */}

      {/* {data.map((d)=>
        <h1>{d.name}</h1>
      )} */}
      {console.log("UI HAS BEEN REDNDERED")}
      <h1>COUNTER {counter}</h1>
      <button onClick={increaseCounter}> INCREASE</button>
      <button onClick={decreaseCounter}> DECREASE</button>
    </div>
  )

}



export default App