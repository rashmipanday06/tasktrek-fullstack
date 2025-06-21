import focusBoard from '../../../assets/programming.png'
import style from './style.module.css'

const Home = () => {
  return (
    <div> 
   <div className={style.container}>  
    <div className={style.containerWrapper}>
    <h1 className={style.heroHeading}>
  Organize your tasks. <br />
  Focus on what matters.
</h1>
     <p className={style.subTitle}>FocusBoard helps you track tasks, set goals, and get more done.</p>
     <button className={style.btn}>Get Started</button>
     </div>
        <img src={focusBoard} alt="Focus Board Preview" className={style.iconWrapper} />
    </div>
    </div>
  )
}

export default Home