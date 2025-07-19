
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import checklist from '../../../assets/image.png'
import requestUrls from '../../../requestUrl';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/feature/loginSlice';

const Registation = () => {
const dispatch= useDispatch();
  const[userName, setUserName]=useState();
  const[email, setEmail]=useState();
  const[password, setPassword]=useState();
  const[confirmPassword, setConfirmPassword]=useState()


const submit = () => {
  const url = requestUrls.REGISTER;

  if (!userName || !email || !password) {
    console.error("Please fill all fields");
    return;
  }

  axios.post(url, 
    {
      username: userName,
      email: email,
      passwordHash: password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((resp) => {
    console.log("Registration Success:", resp.data);
    // Optional: alert user or redirect
    dispatch(loginUser({ username: userName, isLoggedIn: true }));
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error:", error.response.data);
    } else {
      console.error("Network/Server Error:", error.message);
    }
  });
};


const onUserNameChangeHandler=(e:any)=>{
  setUserName(e.target.value);
}
const onEmailChangeHandler=(e:any)=>{
  setEmail(e.target.value);
}
const onPassChangeHandler=(e:any)=>{
  setPassword(e.target.value);
}
const onConPassChangeHandler=(e:any)=>{
  setConfirmPassword(e.target.value);
}

  return (
    <div className={style.conatinerWrapper}>
  <div className={style.container}>
<h2 className={style.headingWrapper}>Sign Up</h2>
<div className={style.groupWrapper}> 
  <span className={style.iconWrapper}><FontAwesomeIcon icon={faUser} />
  <span>User Name</span></span>

<input type="text" className={style.inputWrapper} onChange={onUserNameChangeHandler}/>
</div>

<div className={style.groupWrapper}>
<span className={style.iconWrapper}> 
  <FontAwesomeIcon icon={faEnvelope} />
 <span>Email</span>
 </span>
<input type="text" className={style.inputWrapper} onChange={onEmailChangeHandler}/>
</div>

<div className={style.groupWrapper}>
<span className={style.iconWrapper}>
  <FontAwesomeIcon icon={faLock} />
<span>Password</span>
</span>
<input type="text"  className={style.inputWrapper} onChange={onPassChangeHandler}/>
</div>

<div className={style.groupWrapper}>
  <span className={style.iconWrapper}> 
    <FontAwesomeIcon icon={faLock} />
 <span>Confirm password</span>
 </span>
<input type="text"  className={style.inputWrapper} onChange={onConPassChangeHandler}/>
</div>
<div className={style.btnWrapper}>
<button className={style.btn} onClick={submit}>Register</button>
</div>
</div>
<div className={style.leftImageWrapper}>
  <img src={checklist} alt="Logo" className={style.imageWrapper}/>
</div>

    </div>
  )
}

export default Registation