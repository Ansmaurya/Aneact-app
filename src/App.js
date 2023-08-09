// import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>
    {
setAlert(null)
    },1500);
  }


 const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#200f47';
    showAlert("Dark mode has been enable", "success");
    document.title='Textutils : Dark Mode';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enable", "success");
    document.title='Textutils : Light Mode';
    
  }
  }
  return (
   <>
   {/* <Router> */}
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
  <strong> <Alert alert={alert}/></strong>
   <div className="container">
   {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
           */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze below"mode={mode} />
            
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
   

   
  
   </>
  );
}

export default App;
