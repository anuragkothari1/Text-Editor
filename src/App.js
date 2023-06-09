
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const switchbtnclicked=()=>{
    if(theme==='light')
{    settheme("dark")
setmystyle({color:'white'});
setmodebtntext("Disable Dark Mode");
document.body.style.backgroundColor="grey"

  }
  else{
    settheme("light");
    setmystyle({color:'black'});
    setmodebtntext("Enable Dark Mode")
    document.body.style.backgroundColor="white"
   

  }    
  

  }
  const[theme,settheme]=useState("light")
  const[mystyle,setmystyle]=useState({color:'black'});
  const[modebtntext,setmodebtntext]=useState("Enable Dark Mode");
  
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar title ="Anurag TextUtilscd
    " theme={theme} switchbtnclicked={switchbtnclicked} mystyle={mystyle} modebtntext={modebtntext}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={ <Textform theme={theme}/> }/>
          
          <Route exact path="/about" element={<About />}/>
      </Routes>
      </div>
    </BrowserRouter>
    
    </>
  );}


export default App;
