import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'
import './styles/signInForm.css'
import Error from './styles/Error'

function SignInForm() {

    let navigate = useNavigate()
    const [user, setUser] = useContext(UserContext) 

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        }).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                }).then(navigate('/home'))
            } else {
                r.json().then(err => setErrors([err.errors]))
            }
        })
    }

    return (
        <div className="signInFormContainer">
            <h3>Welcome back!</h3>
            <p>We're so excited to see you again!</p>
            <div className="inputContainer">
                <form onSubmit={handleSubmit}>
                    <p>USERNAME</p>
                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <p>PASSWORD</p>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='logInButton' type='submit'>Log In</button>
                </form>
                <p>Need an account?<button onClick={() => navigate('/register')}>Register</button></p>
                <div>
                    {errors.map((err) => (
                        <Error>{err.errors[0]}</Error>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SignInForm
