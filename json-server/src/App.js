import React, { useState, useEffect } from "react"
import axios from "axios"


//Get, Post, Put, Delete

const callApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        "method": "Get",
        "url": "http://localhost:3001/assignments"
      })
      resolve(data)
      return
    }
    catch (err) {
      reject(err)
    }
  })
}




function App() {
  const [assignments, setAssignments] = useState([])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    /*
    call Api and get data  and set it to the assignments
    */
    setLoader(true)

    callApi().then((data) => {
      setLoader(false)
      setAssignments(data)
    }).catch((err) => {
      setLoader(false)
      console.log("ERROR", err)
    })
  }, [])

  return (<>
    ASSIGNMENTS
    {loader && <h2>LOADING........</h2>}
    {console.log("ASSIGNMENT========", assignments)}
    {assignments.map(d =>
      <div>
        <h1>{d.name}</h1>
        <h2>{d.endTime}</h2>
        <hr />
      </div>
    )}
  </>)

}

export default App