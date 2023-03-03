import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [serversToDisplay, setServersToDisplay] = useState([])
    const [currentServer, setCurrentServer] = useState()
    const [channelsToDisplay, setChannelsToDisplay] = useState([])
    const [currentChannel, setCurrentChannel] = useState()
    const value = [user, setUser, 
      serversToDisplay, setServersToDisplay,
      currentServer, setCurrentServer,
      channelsToDisplay, setChannelsToDisplay,
      currentChannel, setCurrentChannel
    ]

    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
            });
          }
        })
      }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }