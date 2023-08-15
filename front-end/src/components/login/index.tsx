import { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'



import styles from './login.module.css'
import logo from '../../assets/logo icon.gif'


interface LoginProps{
    title: string
}

export function LoginApp({title}: LoginProps){

    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword(){
        if(showPassword === true){
            setShowPassword(false)
        }else{
            setShowPassword(true)
        }
    }

    return(

        <div className={styles.containerDiv}>
        
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
                                value={email}
                                onChange={(e) => setEmail (e.target.value)}
                                required
                            />

                        </div>

                        <div className={styles.containerInput}>

                            <div className={styles.divform}>

                                <label htmlFor="" className={styles.label}>
                                    Senha

                                    
                                </label>

                                <input 
                                    type={showPassword ? "text": "password"}
                                    placeholder='digite sua senha'
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    required
                                /> 
                                
                                {
                                    showPassword ? 
                                    <abbr title="esconder senha"><AiFillEyeInvisible className={styles.eyes} onClick={handleShowPassword}/> </abbr>:
                                    <abbr title="mostrar senha"><AiFillEye className={styles.eyes} onClick={handleShowPassword}/></abbr>
                                }
                                
                                
                            </div>

                        </div>

                        {
                            email.length && 
                            password.length > 0 
                            ? 
                            <>  
                                
                                <button>Entrar</button>
                            </>:
                            <>
                                <p className={styles.alert}>preencha todos os campos</p>
                            </>
                        }
                        

                    </form> 

                </section>
            
                

            </main>
        </div>


    )
}