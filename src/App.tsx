import { useState } from 'react'

import Registation from './components/pages/registation'
import Login from './components/pages/login'
import Home from './components/pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Navbar/>
      <div>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/Registation" element={<Registation />}/>
        </Routes>
      </div>
   
    
    </BrowserRouter>



  )
}

export default App
