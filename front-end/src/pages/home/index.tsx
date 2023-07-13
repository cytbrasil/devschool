import {Link} from 'react-router-dom'
import { HomeApp } from '../../components/home'

export function Home(){
    return(

        <div>
            <HomeApp
                title='DEVSCHOOL'
                subtitle='aprendizado e desenvolvimento'
            />
        </div>

    )
}