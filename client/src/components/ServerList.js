import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import './styles/serverList.css'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { UserContext } from '../context/user';
import Overlay from './Overlay';

function ServerList() {
    
    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)
    const [serverFormName, setServerFormName] = useState("")
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`/users/${user.id}/servers`)
        .then(r => r.json())
        .then(setServersToDisplay)
        }
    },[user])


    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    const handleServerClick = (e) => {
        fetch(`servers/${e.target.id}`)
        .then(r => r.json())
        .then(setCurrentServer)
    }

    const handleAddServer = (e) => {
        e.preventDefault()
        
        fetch('/servers', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: serverFormName })
        }).then(r => {
            if (r.ok) {
                r.json().then(server => {
                    fetch('/user_servers', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ server_id: server.id, user_id: user.id })
                    }).then(r => r.json())
                    .then(newServer => {
                        if (serversToDisplay.length > 0) {
                            setServersToDisplay([...serversToDisplay, newServer.server])
                        } else {setServersToDisplay([newServer.server])}
                        setCurrentServer(newServer.server)
                    })
                    .then(toggleOverlay).then(setServerFormName(""))
                })
            } else {
                r.json().then(errors => setErrors(errors))
            }
        })
    }

    return (
        <div className="serverList">
            {serversToDisplay && serversToDisplay.map(server => (
                <Avatar key={server.id} id={server.id} sx={{height: '60px', width: '60px'}} onClick={handleServerClick}>{server.name[0]}</Avatar>
            ))}
            <ControlPointRoundedIcon onClick={toggleOverlay} sx={{marginTop: "5px", height: '60px', width: '60px'}} className='addServerIcon'/>
            <Overlay isOpen={isOpen} onClose={toggleOverlay}>
                <h3>Add a new server</h3>
                <form className='addServerForm' onSubmit={handleAddServer}>
                    <p>Server Name</p>
                    <input id='name' value={serverFormName} autoFocus autoComplete='off' onChange={e => setServerFormName(e.target.value)}></input>
                    <button type='submit'>Add Server</button>
                </form>
            </Overlay>
        </div>
    )
}

export default ServerList