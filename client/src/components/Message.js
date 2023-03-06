import { Avatar } from '@mui/material'
import React from 'react'
import './styles/message.css'

function Message({ user, content, timestamp }) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>{user}
                    <span className='message__timestamp'>Today at {timestamp.substring(11, 16)}</span>
                </h4>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Message
