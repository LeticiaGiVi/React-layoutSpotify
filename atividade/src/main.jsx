import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import './output.css';
import Home from './Pages/Home.jsx'
import DetalhesArtista from './Pages/DetalhesArtista.jsx'
import MainConteudo from './Componentes/MainConteudo.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children:[
        {index: true, element: <Home/>},
        { path: "/artista/:id", element: <DetalhesArtista/> }
      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
