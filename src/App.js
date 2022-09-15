import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import Getnews from './Components/Getnews';
import About from './Components/About';
import Allnews from './Components/Allnews';
import Admin from './Components/Admin';



function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const wordMode = () => {
    const a='dark';
    if (a) {
    
      document.write("Light")
    } else {
      
      document.write("Dark")
    }
  };
  
  

  const [alert , setAlert] =useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }


 const pageSize=10;
  return (
      <div>
        <Router>           
          <NavBar showAlert={showAlert} mode={mode} toggleMode={toggleMode} wordMode={wordMode}/>
          <Alert alert={alert}/>
         <Routes>
          <Route exact path="/" element={<News key="general" country="in" category="general" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={pageSize} />}></Route>
          <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize={pageSize} mode={mode} toggleMode={toggleMode}/>}></Route>
          
          <Route exact path="/about" element={ <About mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}></Route>
          <Route exact path="/getnews" element={ <Getnews mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}></Route>
          <Route exact path="/login" element={ <Login mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}></Route>
          <Route exact path="/signup" element={ <Signup mode={mode} showAlert={showAlert} />}></Route> 
          <Route exact path="/admin" element={ <Admin mode={mode} showAlert={showAlert} />}></Route>          
          <Route exact path="/allnews" element={ <Allnews mode={mode} showAlert={showAlert} />}></Route>          
          </Routes>
          </Router>

      </div>
    )
  
}

export default App;
