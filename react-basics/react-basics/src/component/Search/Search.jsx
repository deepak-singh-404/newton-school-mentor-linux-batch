import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const makeNetworkRequest = (q) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios({
                "method": 'Get',
                "url": `https://api.servimate.in/customer/dev/api/v1/search/services/all?search=${q}`
            })
            resolve(data)
        }
        catch (err) {
            reject(err)
        }
    })
}

const Search = () => {
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    const clickHandler = (e) => {
        setInput(e.target.value)
        if (e.target.value.length > 0) {
            setLoader(true)

            makeNetworkRequest(e.target.value).then((d) => {
                setLoader(false)
                console.log(d.response)
                setData(d.response)
            }).catch((err) => {
                setLoader(false)
                console.log("ERROR", err)
            })
        }
    }

    return (<div>
        <input placeholder="SEARCH HERE" value={input} type="text" onChange={(e) => clickHandler(e)} />
        {loader && <h4>Loading</h4>}
        {/* {data.map((d) => {
            <h1>{d.item.serviceName || d.item.name}</h1>
        })} */}
        {/* {data.length !== 0 ? data.map((d) =>
            <h1>
                {d.serviceName}

            </h1>
        ) : null} */}
    </div>)
}

export default Search