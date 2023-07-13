import { useState } from 'react'

import styles from './login.module.css'

import olho1 from '../../assets/olho2.png'
import olho2 from '../../assets/olho1.png'
import logo from '../../assets/logo icon.gif'



interface LoginProps{
    title: string
}

export function LoginApp({title}: LoginProps){

    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword(){
        if(showPassword === true){
            setShowPassword(false)
        }else{
            setShowPassword(true)
        }
    }

    return(

        <>
        
        <section className={styles.header}>
                <img   
                    src={logo} 
                    alt="logo" 
                    width='30px'
                />

                <h1>DEVSCHOOL</h1>
                <h2>aprendizado e desenvolvimento</h2>
        </section>

        <main className={styles.body}>

            <section className={styles.container}>

                <div className={styles.divtitle}>

                    <h2 className={styles.title}>{title}</h2>

                </div>

                <form action="" className={styles.form}>

                    <div className={styles.divform}>

                        <label htmlFor="" className={styles.label}>E-mail</label>
                        <input 
                            type="email"
                            placeholder='digite seu email'
                            required
                        />

                    </div>

                    <div className={styles.divform}>

                        <label htmlFor="" className={styles.label}>Senha</label>

                        {
                            showPassword ? 
                            <input type="text" placeholder='digite sua senha' required/> :
                            <input type="password" placeholder='digite sua senha' required/>
                        }
                        
                        {
                            showPassword ? 
                            <img className={styles.imgs} onClick={handleShowPassword} src={olho2} alt="show Password" /> :
                            <img className={styles.imgs} onClick={handleShowPassword} src={olho1} alt="show Password" />
                        }
                        
                        
                    </div>

                    <button>Entrar</button>

                </form>

            </section>
           
            

        </main>
        </>


    )
}