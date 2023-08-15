import { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { FcApproval } from 'react-icons/fc'
import { FcCancel } from 'react-icons/fc'
import { FcMediumPriority } from 'react-icons/fc'


import style from './register.module.css' 



interface RegisterProps{
    title?: string
    subtitle?: string
}


export function RegisterApp({title, subtitle}: RegisterProps){

    const [name, setName]         = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail]       = useState("")
 
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [validPassword, setValidPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    
    function handleShowPassword(){
        
        if(showPassword == false){
            setShowPassword(true)
        }else{
            setShowPassword(false)
        }
        
    }
    
    function handleShowPassword2(){
        
        if(showPassword2 == false){
            setShowPassword2(true)
        }else{
            setShowPassword2(false)
        }
        
    }
    
    
    return(
        <>
       
        <main className={style.body}>

            <section className={style.container}>

                <div className={style.divTitle}>

                    <h2 className={style.titleContainer}>{title}</h2>
                    <span className={style.subtitleContainer}>{subtitle}</span>

                </div>

                <form action="" name='formUser' className={style.form}>

                    <div className={style.divForm}>

                        <label htmlFor="" className={style.label}>Nome</label>
                        <input 
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            type="text"
                            placeholder='digite seu nome'
                            required
                        />

                    </div>


                    <div className={style.divForm}>

                        <label htmlFor="" className={style.label}>Sobrenome</label>
                        <input 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder='digite seu sobrenome'
                            required
                        />
                        
                    </div>

                    <div className={style.divForm}>

                        <label htmlFor="" className={style.label}>E-mail</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='digite seu email'
                            required
                        />
                        
                    </div>

                    <div className={style.containerInput}>


                        <div className={style.divform}>
                            <label htmlFor="" className={style.label}>Senha</label>
                            
                            <input 
                                type={showPassword ? "text" : "password"}
                                placeholder='digite sua senha'
                                value={validPassword}
                                onChange={ (e)=>setValidPassword(e.target.value)}
                                required
                            />
                            
                            {
                                showPassword ? 
                                <abbr title="esconder senha"><AiFillEyeInvisible className={style.eyes} onClick={handleShowPassword}/> </abbr>:
                                <abbr title="mostrar senha"><AiFillEye className={style.eyes} onClick={handleShowPassword}/></abbr>
                            }
                            
                        </div>

                    </div>

                    <div className={style.containerInput}>

                        <div className={style.divform}>
                            <label htmlFor="" className={style.label}>Repita a senha</label>
                            <input 
                                type={showPassword2 ? "text" : "password"} 
                                placeholder='digite sua senha novamente' 
                                value={repeatPassword}
                                onChange={ (e)=>setRepeatPassword(e.target.value)}
                                required
                            />


                            
                            
                            {
                                showPassword2 ? 
                                <abbr title="esconder senha"><AiFillEyeInvisible className={style.eyes} onClick={handleShowPassword2}/> </abbr>:
                                <abbr title="mostrar senha"><AiFillEye className={style.eyes} onClick={handleShowPassword2}/></abbr>
                            }
                            
                        </div>

                    </div>
                    
                    {
                        
                       name.length &&
                       lastName.length && 
                       email.length && 
                       validPassword.length > 0 ?

                            validPassword == repeatPassword ? ( 
                                <div className={style.alert}>
                                    <h4>senhas iguais<FcApproval /></h4>
                                    <button>Cadastrar</button>
                                </div>
                            ):
                            (
                                <div className={style.alert2}>
                                    <h4>senhas difrentes <FcCancel/></h4>
                                </div>
                            ):
                                <div className={style.alert3}>
                                    <h4>preencha todos os campos <FcMediumPriority/></h4>
                                </div>
                                
                    }
                    

                </form>

            </section>

        </main>
    
        
    </>

    )
}