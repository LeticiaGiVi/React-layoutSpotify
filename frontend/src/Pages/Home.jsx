
import { useEffect, useState } from "react";
import Sidebar from "../Componentes/Sidebar";
import Container from "../Componentes/Container";
import MainConteudo from "../Componentes/MainConteudo";
import { Link } from "react-router-dom";


function Home() {

    const [artistas,setArtistas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then (res => res.json())
      .then (data => setArtistas(data))
      .catch (err => console.log(err))
      .finally(()=> console.log('Finalizou a requisição'))
    },[])

    return ( 
        <>
        <Container>
            <Sidebar/>
            <MainConteudo>
                <div className="flex flex-col">
            <h1 className="text-white font-bold">POP</h1>
                <div className="flex flex-row">
                {
                    artistas
                    .filter( artista => artista.genero.includes("pop"))
                    .map( artista => (
                        <Link to= {`/artista/${artista._id}`}>
                        <div className="bg-slate-800 flex flex-col items-center justify-evenly py-1 m-3">
                            <img className="size-40 m-4" src={artista.image} alt="" />
                            <h2 className="text-white font-bold">{artista.name}</h2>
                        </div>
                        </Link>
                    ))
                }
                </div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-white font-bold">Rock</h1>
                <div className="flex flex-row">
                {
                    artistas
                    .filter( artista => artista.genero.includes("rock"))
                    .map( artista => (
                        <Link to= {`/artista/${artista._id}`}>
                        <div className="bg-slate-800 flex flex-col items-center justify-evenly py-1 m-3">
                            <img className="size-40 m-4" src={artista.image} alt="" />
                            <h2 className="text-white font-bold">{artista.name}</h2>
                        </div>
                        </Link>
                    ))
                }
                </div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-white font-bold" >MPB</h1>
                <div className="flex flex-row">
                {
                    artistas
                    .filter( artista => artista.genero.includes("MPB"))
                    .map( artista => (
                        <Link to= {`/artista/${artista._id}`}>
                        <div className="bg-slate-800 flex flex-col items-center justify-evenly py-1 m-3">
                            <img className="size-40 m-4" src={artista.image} alt="" />
                            <h2 className="text-white font-bold">{artista.name}</h2>
                        </div>
                        </Link>
                    ))
                }
                </div>
                </div>

            </MainConteudo>
        </Container>
    </>
     );
}

export default Home;