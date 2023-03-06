import "./App.css"
import { Route, Routes as Switch, useNavigate } from 'react-router-dom'
import SignInPage from "./components/SignInPage";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/user";

const ws = new WebSocket("ws://localhost:3000/cable")

function App() {
  
  let navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)
  const [guid, setGuid] = useState("")

    ws.onopen = () => {
        console.log("Connected to websocket server")
        setGuid(Math.random().toString(36).substring(2, 15))
        ws.send(JSON.stringify({
            command: "subscribe",
            identifier: JSON.stringify({
            id: guid,
            channel: "MessagesChannel"
            })
        }))
    } 

    useEffect(() => {
      if (user) {
        navigate('/home')
      }
    }, [user])   
  
  return (
    <div className="app">

      <Switch>
        <Route exact path='/' element={<SignInPage />}/>
        <Route exact path='/register' element={<SignUpPage />}/>
        <Route exact path='/home' element={<Home ws={ws} />}/>
      
      </Switch>

    </div>
  );
}

export default App;
