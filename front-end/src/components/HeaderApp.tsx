
import './HeaderApp.css'
import logo from '../assets/logo icon.gif'

interface HeaderProps{
    title: string
    subtitle: string
}


const HeaderApp = ({title, subtitle}: HeaderProps)=>{
    return(

        <>
            <div className='divTitle'>
                <img src={logo} alt="logo dev" className='img' />
                <h1 className='title'>{title}</h1>
            </div>
            <div className='divSubtitle'>
                <p className='subtitle'>{subtitle}</p>
            </div>
        </>
       
    )
}

export default HeaderApp