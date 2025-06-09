import { useState } from 'react'

import Registation from './components/pages/registation'
import Login from './components/pages/login'
import Home from './components/pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>{/* <Registation/> */}
{/* <Login/> */}
<Home/>
</>

  )
}

export default App
