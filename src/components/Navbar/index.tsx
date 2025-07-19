
import logo from '../../assets/logo.png'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Registation from '../pages/registation'
import style from './style.module.css'
const Navbar = () => {
  return (
    <nav className={style.main}>
        <div className={style.logoMainWrapper}>
            <Link to='/'> <img src={logo} alt="logo" className={style.logoWrapper}/></Link>
           
        </div>
        <div className={style.navWrapper}>
            <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/registation'>Registation</Link>
        </div>

    </nav>
  )
}

export default Navbar  