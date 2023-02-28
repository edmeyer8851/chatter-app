import { Avatar } from '@mui/material'
import React from 'react'
import './styles/serverList.css'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

function ServerList() {
    return (
        <div className="serverList">
            <Avatar sx={{height: '60px', width: '60px'}}/>
            <Avatar sx={{height: '60px', width: '60px'}}/>
            <Avatar sx={{height: '60px', width: '60px'}}/>
            <Avatar sx={{height: '60px', width: '60px'}}/>
            <ControlPointRoundedIcon sx={{height: '60px', width: '60px'}} className='addServerIcon'/>
        </div>
    )
}

export default ServerList