import React, { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("") //hook
    const [password, setPassword] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        if(!email){
            alert("EMAIL FIELD IS EMPTY")
            return
        }
        if(!password){
            alert("PASSWORD FIELD IS EMPTY")
            return
        }
        alert(JSON.stringify({
            "email":email,
            "password": password
        }))
    }



    return (
        <div>
            <h1>LOGIN FORM</h1>
            <form onSubmit={formHandler}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm