import focusBoard from '../../../assets/programming.png'
import { Link } from 'react-router-dom';
import style from './style.module.css'

const Home = () => {
  return (
    <div> 
   <div className={style.container}>  
    <div>
     <h2>Organize your tasks. Focus on what matters.</h2>
     <p>FocusBoard helps you track tasks, set goals, and get more done.</p>
     <button>Get Started</button>
     </div>
        <img src={focusBoard} alt="Focus Board Preview" className={style.iconWrapper} />
    </div>
    </div>
  )
}

export default Home