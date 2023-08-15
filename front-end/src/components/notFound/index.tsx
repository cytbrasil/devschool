import { Link } from 'react-router-dom'

import styles from './notFound.module.css'
import logo from '../../assets/logo icon.gif'

interface NotFoundProps{
    title: string
}

export function NotFoundApp({title}: NotFoundProps){
    return(
        <main className={styles.container}>

            <img 
                className={styles.img}
                src={logo} 
                alt="logo"
            />

            <p>{title}</p>

            <section>

                <h2>Opa, me parece que você se perdeu! Esta pagina não existe.</h2>
                <h3>ERROR 404: NOT FOUND</h3>
                
            </section>

            <section className={styles.divButton}>

                <button><Link to='/'>Voltar para home</Link></button>

            </section>

        </main>
    )
}