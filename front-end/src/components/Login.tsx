import './Login.css'


interface LoginProps{
    title: string
}

const Login = ({title}: LoginProps) => {
  return (
    
    <>

        <div className="container">

            <section className="header">
                <h3>{title}</h3>
            </section>

            <form action="" className="form">

                <div className="form-content">

                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="digite seu e-mail..."
                        required
                    />

                </div>

                <div className="form-content">

                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="digite sua senha..."
                        required
                    />

                </div>

                <button type="submit">Entrar</button>

            </form>

        </div>

    </>

  )
}

export default Login