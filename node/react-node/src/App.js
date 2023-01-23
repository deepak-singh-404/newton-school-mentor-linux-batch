import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/assignments')
      .then(function (response) {
        setAssignments(response.data.data)
        //setAssignments(response.data.data)
      })
  }, [])

  return (
    <>
      {assignments.length !== 0 ? <div>
        {assignments.map(d =>
          <h1>{d.name}</h1>
        )}
      </div> : null}
    </>
  )
}

export default App;
