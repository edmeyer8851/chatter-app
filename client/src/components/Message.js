import { Avatar } from '@mui/material'
import React from 'react'
import './styles/message.css'

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>eddiemeyer
                    <span className='message__timestamp'> this is a timestamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
