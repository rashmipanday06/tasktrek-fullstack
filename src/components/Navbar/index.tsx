import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'

import style from './style.module.css'
const Navbar = () => {
   const location = useLocation();
  return (
    <nav className={style.main}>
        <div className={style.logoMainWrapper}>
            <Link to='/'> <img src={logo} alt="logo" className={style.logoWrapper}/></Link>
           
        </div>
        <div className={style.navWrapper}>
            <Link to='/'><button className={location.pathname=="/"?style.activeNavLink:style.naTextvWrapper}>Home</button></Link>
            <Link to='/Login'><button className={location.pathname=="/Login"?style.activeNavLink:style.naTextvWrapper}>Login</button></Link>
            <Link to='/registation'><button className={location.pathname=="/registation"?style.activeNavLink:style.naTextvWrapper}>Registation</button></Link>
        </div>

    </nav>
  )
}

export default Navbar