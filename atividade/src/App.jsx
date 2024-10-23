import { useEffect, useState } from "react";
import{ Outlet } from "react-router-dom";
import './index.css';
import './output.css';

import Home from './Pages/Home';
import Header from './Componentes/Header';
import Sidebar from "./Componentes/Sidebar";
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
