import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import ServerList from './ServerList'
import Sidebar from './Sidebar'

function Home() {
    
    const [serversToDisplay, setServersToDisplay] = useState([])
    const [currentServer, setCurrentServer] = useState()
    const [channelsToDisplay, setChannelsToDisplay] = useState([])

    useEffect(() => {
        if (currentServer) {
            setChannelsToDisplay(currentServer.channels)
        }
    },[])

    return (
        <>
            <ServerList 
                serversToDisplay={serversToDisplay}
                setServersToDisplay={setServersToDisplay}
                currentServer={currentServer} 
                setCurrentServer={setCurrentServer}
            />
            <Sidebar 
                serversToDisplay={serversToDisplay}
                setServersToDisplay={setServersToDisplay}
                currentServer={currentServer} 
                setCurrentServer={setCurrentServer} 
                channelsToDisplay={channelsToDisplay}
                setChannelsToDisplay={setChannelsToDisplay}
            />
            <Chat />
        </>
    )
}

export default Home
