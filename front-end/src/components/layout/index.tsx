import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Footer } from "../footer"

export function Layout(){
    return(
        <>  
            <Header
                title="DevSchool"
                login="Entrar"
                register="Cadastrar"
            />
            <Outlet/>
            <Footer/>
        </>
    )
}