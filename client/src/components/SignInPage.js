import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'
import SignInForm from './SignInForm'
import './styles/signInPage.css'

function SignInPage() {

    return (
        <div className="signInPage">
            <SignInForm />
        </div>
    )
}

export default SignInPage
