import React from 'react'
import './styles/sidebarChannel.css'

function SidebarChannel({channel}) {
    return (
        <div className="sidebarChannel">
            <h4><span className='sidebarChannel__hash'>#</span>{channel.name}</h4>
        </div>
    )
}

export default SidebarChannel
