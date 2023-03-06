import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import './styles/sidebarChannel.css'

function SidebarChannel({channel}) {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)
        
    return (
        <div onClick={() => setCurrentChannel(channel)} className="sidebarChannel">
            <h4><span className='sidebarChannel__hash'>#</span>{channel.name}</h4>
        </div>
    )
}

export default SidebarChannel
