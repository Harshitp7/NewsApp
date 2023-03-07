import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  
  const [mode, setMode] = useState('light');
  

  let toggleMode = () => {
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#262a2d';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<News key="General" mode={mode} />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;