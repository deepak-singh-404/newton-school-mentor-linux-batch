import axios from 'axios'

function App() {

  const buttonClickHandler = () => {
    alert("HEY MAN")
  }

  const getData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          "method": "Get",
          "url": "https://jsonplaceholder.typicode.com/todos/1"
        })
        resolve(data)
      }
      catch (error) {
        reject(error)
      }

    })

  }

  const getDataFromApi = () => {
    getData().then((data) => {
      console.log("DATA=================>", data)
    }).catch((err) => {
      alert(err.message)
    })


  }

  return (<div>

    <h1>Hey buddy, How are you?</h1>
    <button onClick={buttonClickHandler}>Click</button>
    <button onClick={getDataFromApi}>CALL API</button>
  </div>)
}

export default App

