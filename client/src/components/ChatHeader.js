import React, { useContext } from 'react'
import './styles/chatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

function ChatHeader({ searchTerm, setSearchTerm}) {

    let navigate = useNavigate()

    const [user, setUser, 
        serversToDisplay, setServersToDisplay,
        currentServer, setCurrentServer,
        channelsToDisplay, setChannelsToDisplay,
        currentChannel, setCurrentChannel] = useContext(UserContext) 

    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) { 
              setUser(null);
            }
          }).then(navigate('/'))
    }
    
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className='chatHeader__hash'>#</span>
                    {currentChannel ? `${currentChannel.name}` : "Select a channel"}
                </h3>
            </div>
            <div className="chatHeader__right">
                {/* <NotificationsIcon className='icon'/>
                <EditLocationRoundedIcon className='icon'/>
                <PeopleAltRoundedIcon className='icon'/> */}

                <form className="chatHeader__search">
                    <input placeholder='Search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                    <SearchRoundedIcon className='icon' />
                </form>
                {/* <SendRoundedIcon className='icon' /> */}
                <LogoutIcon className='lastIcon' onClick={handleLogout} />
            </div>
        </div>
    )
}

export default ChatHeader
