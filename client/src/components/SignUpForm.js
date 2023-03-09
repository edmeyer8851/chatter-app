import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'
import './styles/signUpForm.css'
import Error from './styles/Error'

function SignUpForm() {

    let navigate = useNavigate()
    const [user, setUser] = useContext(UserContext) 

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, username, password, password_confirmation: passwordConfirmation }),
        }).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                }).then(navigate('/home'))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="formContainer">
            <h3>Create an account</h3>
            <p>It's easy, we promise.</p>
            <div className="inputContainer">
                <form onSubmit={handleSubmit}>
                    <p>EMAIL</p>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <p>USERNAME</p>
                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <p>PASSWORD</p>
                    <input id="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p>CONFIRM PASSWORD</p>
                    <input id="password_confirmation" type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                    <button className='logInButton' type='submit'>Register</button>
                </form>
                <p>Already have an account?<button onClick={() => navigate('/')}>Sign in</button></p>
                <div>
                    {errors.map(err => (
                        <Error>{err}</Error>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SignUpForm
