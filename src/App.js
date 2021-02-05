import './App.css';
import Login from './components/login.js';
import Home from './components/home.js';
import Main from './components/main.js';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [userData,setUserData] = useState()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login setUserData={setUserData} />
          </Route>
          <Route exact path='/home'> 
            <Home userData={userData}/>
          </Route>
          <Route exact path='/main'>
            <Main userData={userData} setUserData={setUserData}/>
          </Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
