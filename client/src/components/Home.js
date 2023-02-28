import React from 'react'
import Chat from './Chat'
import ServerList from './ServerList'
import Sidebar from './Sidebar'

function Home() {
    return (
        <>
            <ServerList />
            <Sidebar />
            <Chat />
        </>
    )
}

export default Home
