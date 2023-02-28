import React from 'react'
import ChatHeader from './ChatHeader'
import './styles/chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';

function Chat() {
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
                <form>
                    <input placeholder='Message #Channel Name'></input>
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
