import Login from './Components/Login';
import Home from './Components/Home';
import Main from './Components/Main';
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
            <Home userData={userData} setUserData={setUserData}/>
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
