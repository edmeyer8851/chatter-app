import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import './styles/chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { UserContext } from '../context/user';



function Chat({ws, messages, setMessages}) {
    
    const bottomRef = useRef(null)

    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext) 

    const [searchTerm, setSearchTerm] = useState('')

    ws.onmessage = e => {
        const data = JSON.parse(e.data)
        if (data.type === "ping") return
        if (data.type ==="welcome") return
        if (data.type === "confirm_subscription") return
        const message = data.message
        if (data.message.channel_id === currentChannel.id){
            setMessages(messages => [...messages, message])
        }
    }
    
    useEffect(() => {
        if (currentChannel && searchTerm === "") {
            fetchMessages()
        }
    }, [currentChannel, searchTerm])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    },[messages])

    const fetchMessages = async () => {
        const response = await fetch("/messages")
        const data = await response.json()
        const channelMessages = data.filter(message => {
            if (message.channel_id == currentChannel.id) {
                return message
            }
        })
        setMessages(channelMessages)
    }

    const [formContent, setFormContent] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/messages', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: formContent, user_id: user.id, channel_id: currentChannel.id })
        })
        setFormContent('')
    }


    useEffect(() => {
        if (searchTerm !== ""){
            let filteredMessages = messages.filter(message => {
                return message.content.toLowerCase().includes(searchTerm.toLowerCase())
            })  
            setMessages(filteredMessages)
        }
    }, [searchTerm])

    console.log(searchTerm)
    
    return (
        <div className="chat">
            <ChatHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <div className="chat__messages">
                {messages.map(message => (
                    <Message key={message.id} user={message.user.username} content={message.content} timestamp={message.created_at}/>
                ))}
                <div ref={bottomRef} />
            </div>

            {currentChannel && <div className="chat__input">
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
            </div>}
        </div>
    )
}

export default Chat
