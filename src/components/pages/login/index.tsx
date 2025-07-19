import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style.module.css'
import { useState } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../store/feature/loginSlice'
const Login = () => {

  const dispatch=useDispatch()

  const[userName, setUserName]=useState('')
  const loginHandler=()=>{
 dispatch(loginUser({ username: userName, isLoggedIn: true }));
 setUserName('')
  }
const usernameHanlder = (e: any) => {
  const name = e.target.value;
  setUserName(name);
};
  return (
<div className={style.conatinerWrapper}>
 <div className={style.container}>
    <h2 className={style.headingWrapper}>Sign In</h2>
    <div className={style.groupWrapper}>
      <span className={style.iconWrapper}> 
      <FontAwesomeIcon icon={faEnvelope} />
      <span>Email</span>
      </span>
      <input type="text" className={style.inputWrapper} value={userName} onChange={usernameHanlder}/>
    </div>  
    
    <div className={style.groupWrapper}>
     <span className={style.iconWrapper}>
     <FontAwesomeIcon icon={faLock} />
     <span>Password</span>
     </span>
     <input type="text"  className={style.inputWrapper}/>
    </div>
 </div>

 <div className={style.btnWrapper}>
    <button className={style.btn} onClick={loginHandler}>Login</button>
 </div>
</div>
  )
}

export default Login