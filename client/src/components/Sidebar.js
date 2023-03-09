import React, { useContext, useEffect, useState } from 'react'
import './styles/sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import { UserContext } from '../context/user';
import Overlay from './Overlay';
import Error from './styles/Error'


function Sidebar() {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)
    const [channelFormName, setChannelFormName] = useState("")
    const [errors, setErrors] = useState([])

    useEffect(() => {        
        if (currentServer) {
            fetch(`/servers/${currentServer.id}/channels`)
        .then(r => r.json())
        .then(channels => {
            setChannelsToDisplay(channels)
            setCurrentChannel(channels[0])
        })
        }
    }, [currentServer])

    useEffect(() => {
        if (user.servers) {
            setCurrentServer(user.servers[0])
        }
    }, [])

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
        setErrors([])
    };

    const deleteServer = () => {
        fetch(`servers/${currentServer.id}`, {
            method: 'DELETE'
        }).then(() => {
            setServersToDisplay(serversToDisplay.filter(server => server.id != currentServer.id))
        }).then(() => {
            if (serversToDisplay.length <= 1) {
                setCurrentServer(undefined)
            } else setCurrentServer(serversToDisplay[0])
        })
    }

    const handleAddChannel = (e) => {
        e.preventDefault()
        
        fetch('/channels', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: channelFormName, server_id: currentServer.id })
        }).then(r => {
            if (r.ok){
                r.json()
                .then(channel => {
                    if (channelsToDisplay.length > 0) {
                        setChannelsToDisplay([...channelsToDisplay, channel])
                    } else {setChannelsToDisplay([channel])}
                    setCurrentChannel(channel)
                }).then(toggleOverlay).then(setChannelFormName(""))
            } else {
                r.json()
                .then(err => setErrors(err.errors))
            }
    })
        
    }
    
    return (
        <div className = "sidebar">  
            {!currentServer && <div className="sidebar__top">
                <h3 className="instructions">
                    {serversToDisplay.length > 0 ? "Select a server on the left to view channels and messages" 
                    : "To get started, create a new server by clicking the green plus to the left"}
                </h3>
            </div>}          
            {currentServer && <><div className="sidebar__top">
                {currentServer && <><h3>{currentServer.name}</h3>
                <DeleteIcon className="icon" onClick={deleteServer}/></>}
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" onClick={toggleOverlay}/>
                    <Overlay isOpen={isOpen} onClose={toggleOverlay}>
                        <h3>Add a new channel</h3>
                        <form className='addChannelForm' onSubmit={handleAddChannel}>
                            <p>Channel Name</p>
                            <input id='name' value={channelFormName} autoFocus autoComplete='off' onChange={e => setChannelFormName(e.target.value)}></input>
                            <button type='submit'>Add Channel</button>
                        </form>
                        <div>
                            {errors.map(err => (
                                <Error key={err}>{err}</Error>
                            ))}
                        </div>
                    </Overlay>
                </div>

                <div className="sidebar__channelsList">
                    {channelsToDisplay.length > 0 && channelsToDisplay.map(channel => (
                        <SidebarChannel key={channel.id} channel={channel}/>
                    ))}
                </div>
            </div></>}
            {/* <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className='sidebar__voiceIcon'
                    fontSize='medium'
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon className='icon'/>
                    <CallIcon className='icon'/>
                </div>
            </div> */}
            <div className="sidebar__profile">
                <Avatar />
                {user && <div className="sidebar__profileInfo">
                    <h3>@{user.username}</h3>
                    <p>#821{user.id}</p>
                </div>}
                <div className="sidebar__profileIcons">
                    <MicIcon className='icon'/>
                    <HeadsetIcon className='icon'/>
                    <SettingsIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
