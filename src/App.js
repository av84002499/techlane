import React from 'react'
import Navber from './Navber'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from './Component/Home';

const App = () => {
  return (
    <>
    <Router>
    <div>

      < Navber />
        <Routes>
        <Route key="Home" path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
</>
  
  )
}

export default App