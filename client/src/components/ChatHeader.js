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

function ChatHeader() {

    let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)  

    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) { 
              setUser(null);
            }
          }).then(navigate('/'));
    }
    
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className='chatHeader__hash'>#</span>
                    Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon className='icon'/>
                <EditLocationRoundedIcon className='icon'/>
                <PeopleAltRoundedIcon className='icon'/>

                <form className="chatHeader__search">
                    <input placeholder='Search' />
                    <SearchRoundedIcon className='icon' />
                </form>
                <SendRoundedIcon className='icon' />
                <LogoutIcon className='lastIcon' onClick={handleLogout} />
            </div>
        </div>
    )
}

export default ChatHeader
