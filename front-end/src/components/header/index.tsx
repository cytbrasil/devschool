
import { Link } from "react-router-dom"
 
import styles from './header.module.css'
import logo from '../../assets/logo icon.gif'

interface HeaderProps{
    title: string
    login: string
    register: string
}

 export function Header({title, login, register}: HeaderProps){
    return(
        <header>
           
            <div className={styles.container}>      

                <Link to='/'>
                    <div className={styles.divTitle}>
                        <img 
                            className={styles.img}
                            src={logo} 
                            alt="" 
                        />
                        <h1 className={styles.title}>{title}</h1> 
                    </div>
                </Link>

                <div className={styles.divButtons}>

                    <Link to='/login'>{login}</Link>
                    <Link to='/register'>{register}</Link>

                </div>

            </div>

        </header>
    )
 }