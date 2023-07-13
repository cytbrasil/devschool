import styles from './homeApp.module.css'

import logo from '../../assets/logo icon.gif'

interface HomeProps{
    title: string
    subtitle: string
}

export function HomeApp({title, subtitle}: HomeProps){
    return(
        <div className={styles.container}>
            
            <div className={styles.divtitle}>

                <img 
                    src={logo} 
                    alt="logo"
                    className={styles.img}
                    
                />

                <h1 className={styles.title}>{title}</h1>

                <h2 className={styles.subtitle}>{subtitle}</h2>
                
            </div>

        </div>
    )
}