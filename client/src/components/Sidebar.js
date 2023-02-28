import React from 'react'
import './styles/sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';


function Sidebar() {
    return (
        <div className = "sidebar">            
            <div className="sidebar__top">
                <h3>Server Name</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar__voice">
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
            </div>
            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>@eddiemeyer</h3>
                    <p>#user_id</p>
                </div>
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
