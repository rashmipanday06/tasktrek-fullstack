import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
const Login = () => {
  return (
<div className={style.conatinerWrapper}>
 <div className={style.container}>
    <h2 className={style.headingWrapper}>Sign In</h2>
    <div className={style.groupWrapper}>
      <span className={style.iconWrapper}> 
      <FontAwesomeIcon icon={faEnvelope} />
      <span>Email</span>
      </span>
      <input type="text" className={style.inputWrapper}/>
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
    <button className={style.btn}>Login</button>
 </div>
</div>
  )
}

export default Login