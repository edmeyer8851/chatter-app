import React, { useContext } from 'react'
import SignUpForm from './SignUpForm'
import './styles/signUpPage.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'

function SignUpPage() {
    
    return (
        <div className="signUpPage">
            <SignUpForm />
        </div>
    )
}

export default SignUpPage
