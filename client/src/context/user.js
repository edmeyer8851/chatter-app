import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const value = [user, setUser]

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