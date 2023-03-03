import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import Chat from './Chat'
import ServerList from './ServerList'
import Sidebar from './Sidebar'

function Home() {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)

    useEffect(() => {
        if (currentServer) {
            setChannelsToDisplay(currentServer.channels)
        }
    },[])

    return (
        <>
            <ServerList />
            <Sidebar />
            <Chat />
        </>
    )
}

export default Home
