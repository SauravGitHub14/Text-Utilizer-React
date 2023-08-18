import './App.css';
import Navbar from './Navbar';
import TextConverter from './TextConverter';
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(1);

  const showAlert = (message, type) =>{
    setAlert({
      mssg: message,
      Type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark Mode has been enabled", 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled", 'success');
    }
  }
       return (
         <>
        <Router>
            <Navbar  title="Text Form"   mode ={mode} toggleMode={toggleMode} />
            <Alert alert = {alert} />
            <div className="container my-9">
            <Switch>
                 <Route  path="/About">
                   <About/>
                 </Route>
                 <Route  path="/">
                 <TextConverter showAlert={showAlert} heading="Enter the Text to analyze" mode ={mode}/>
                 </Route>
            </Switch>
            </div>
        </Router>
     </>
       );
     }
     
export default App;
