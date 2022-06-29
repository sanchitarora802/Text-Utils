import React, {useState} from 'react'
import Navbar from './Components/Navbar.js'
import Formtext from './Components/Formtext.js';
import About from './Components/About.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

    const [mode,setMode] = useState('light'); //state 1 saved

    const toggleMode = () =>{
       if(mode === 'light'){
           setMode('dark')
           document.body.style.backgroundColor = 'black';
       }
       else{
           setMode('light')
           document.body.style.backgroundColor = 'white';
       }
    }   

    return (
    <Router>
          <div>
            <Navbar mode = {mode} toggleMode = {toggleMode} />
            <Routes>
            <Route path = "/About" element = {<About />}></Route>
            <Route path = "/" element = {<Formtext mode = {mode}/>}></Route>
            </Routes>
          </div>
    </Router>
    )
}

export default App;