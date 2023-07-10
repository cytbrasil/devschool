//import { useState } from 'react'
import './App.css'
import HeaderApp from './components/HeaderApp'
import Login from './components/Login'

function App() {

  return (
    <>
      <header>

        <HeaderApp 
          title='DevSchool'
          subtitle='aprendizado e desenvolvimento'
        />

      </header>

      <main>
        
        <Login
          title='Faça o login para ter acesso a comunidade'
        />

      </main>

      <footer>
        
        
      </footer>
    </>
  )
}

export default App
