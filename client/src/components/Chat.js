import React, { useContext, useState } from 'react'
import ChatHeader from './ChatHeader'
import './styles/chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { UserContext } from '../context/user';

function Chat() {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)

    const [formContent, setFormContent] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/messages', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: formContent, user_id: user.id, channel_id: currentChannel.id })
        }).then(() => setFormContent(''))
    }
    
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCircleIcon className='icon' fontSize='large'/>
                <form onSubmit={handleSubmit} >
                    <input placeholder='Message #Channel Name' value={formContent} onChange={(e) => setFormContent(e.target.value)} ></input>
                    <button className='chat__inputButton' type='submit'>
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon className='icon'/>
                    <GifIcon className='icon'/>
                    <EmojiEmotionsIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Chat
