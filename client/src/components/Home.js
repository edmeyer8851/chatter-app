import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import Chat from './Chat'
import ServerList from './ServerList'
import Sidebar from './Sidebar'

function Home({ws}) {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)

    const [messages, setMessages] = useState([]) 

    useEffect(() => {
        if (currentServer) {
            setChannelsToDisplay(currentServer.channels)
        }
    },[])

    return (
        <>
            {user && <> <ServerList setMessages={setMessages}/>
            <Sidebar />
            <Chat ws={ws} messages={messages} setMessages={setMessages}/></>}
        </>
    )
}

export default Home
