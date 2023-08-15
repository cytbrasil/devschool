//imports biblioteca
import { createBrowserRouter } from 'react-router-dom'

//pages
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { NotFound } from './pages/notFound'
import { Layout } from './components/layout'


export const router = createBrowserRouter(
    [
        {
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register/>
                },
                {
                    path: "*",
                    element: <NotFound/>
                    
                }
            ]
        }
    ]
)