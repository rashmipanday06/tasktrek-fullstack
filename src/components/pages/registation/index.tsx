
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import checklist from '../../../assets/image.png'

const Registation = () => {
  return (
    <div className={style.conatinerWrapper}>
  <div className={style.container}>
<h2 className={style.headingWrapper}>Sign Up</h2>
<div className={style.groupWrapper}> 
  <span className={style.iconWrapper}><FontAwesomeIcon icon={faUser} /><span>User Name</span></span>

<input type="text" className={style.inputWrapper} />
</div>

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

<div className={style.groupWrapper}>
  <span className={style.iconWrapper}> 
    <FontAwesomeIcon icon={faLock} />
 <span>Confirm password</span>
 </span>
<input type="text"  className={style.inputWrapper}/>
</div>
<div className={style.btnWrapper}>
<button className={style.btn}>Register</button>
</div>
</div>
<div className={style.leftImageWrapper}>
  <img src={checklist} alt="Logo" className={style.imageWrapper}/>
</div>

    </div>
  )
}

export default Registation