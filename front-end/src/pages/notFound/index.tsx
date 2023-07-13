import {Link} from 'react-router-dom'


export function NotFound(){
    return(
        <div>

            <h1>Error 404</h1>
            <h2>Esta pagina não existe</h2>
            <Link to='/'>voltar para home</Link>
            
        </div>
    )
}