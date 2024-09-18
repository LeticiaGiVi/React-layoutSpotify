//import { useState } from 'react'
import './index.css';
import './output.css';
import Home from './Pages/Home';
import Header from './Componentes/Header';
/*npx tailwindcss -i ./src/index.css -o ./src/output.css --watch*/ 

function App() {

  return (
    <>
    <div className='h-lvh flex flex-col'>
      <Header/>
      <Home/>
    </div>
    </>
  )
}

export default App
