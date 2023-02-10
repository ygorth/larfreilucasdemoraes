import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/geral.css'
import { createBrowserRouter,  RouterProvider  } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Historia from './pages/Historia';
import Doacoes from './pages/Doacoes';
import Fotos from './pages/Fotos';
import Contato from './pages/Contato';
import NaoEncontrada from './pages/NaoEncontrada';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NaoEncontrada/>,
    children:[
      { path:'/',
       element:<Inicio/>,
      },
      {
        path:'/historia',
        element:<Historia/>
      }, 
       {
        path:'/doacoes',
        element:<Doacoes/>
      },
      {
        path:'/fotos',
        element:<Fotos/>
      },
      {
        path:'/contato',
        element:<Contato/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
