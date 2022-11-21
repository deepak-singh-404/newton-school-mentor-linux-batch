import React, {useEffect}from "react";
import { useState } from "react";


const LifeCycle = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(false)


    useEffect(()=>{
        console.log("SOMEONE IS TYPING EMAIL")
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        };
        //console.log("validEmai",validateEmail)
        setIsValidEmail(validateEmail(email))
    },[email])

    useEffect(()=>{
        console.log("SOMEONE IS TYPING NAME")

    },[name])

    // hook offered from react

    //Case 1 page render for the very first time.
    useEffect(()=>{
        console.log("I WILL BE CALLED FOR THE VERY FIRST TIME")
    },[])

    //
    // useEffect(()=>{
    //     console.log("I WILL BE CALLED, WHEN PAGE GET RENDERRD")

    // })
    return <div>
        {/* {console.log("I AM THE PROOF THAT PAGE IS GETTING RENDERED AGAIN AND AGAIN")} */}
        <input type="text" value={name} placeholder="NAME" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={email} placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
        {!isValidEmail && <h5>EMAIL IS NOT VALID</h5> }
        <h3>Lets learn life cycle in react</h3>
    </div>
}


export default LifeCycle