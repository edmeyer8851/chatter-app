import "./App.css"
import { Route, Routes as Switch, useNavigate } from 'react-router-dom'
import SignInPage from "./components/SignInPage";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/user";

function App() {
  
  let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

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
        <Route exact path='/home' element={<Home />}/>
      
      </Switch>

    </div>
  );
}

export default App;
