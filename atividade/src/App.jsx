//import { useEffect, useState } from "react";
import './index.css';
import './output.css';
import Home from './Pages/Home';
import Header from './Componentes/Header';
/*npx tailwindcss -i ./src/index.css -o ./src/output.css --watch*/ 

function App() {

  // const [artistas,setArtistas] = useState([]);
  // const [isLoading,setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:3000/artistas')
  //   .then (res => res.json())
  //   .then (data => setArtistas(data))
  //   .catch (err => console.log(err))
  // },[])

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
