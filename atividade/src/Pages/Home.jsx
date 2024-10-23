
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
                <div className="flex flex-row">
                <h1>POP</h1>
                {
                    artistas
                    .filter( artista => artista.genero.includes("pop"))
                    .map( artista => (
                        <Link to= {`/artista/${artista._id}`}>
                        <div className="conteudo bg-rosa size-40 flex flex-col items-center justify-evenly py-1 m-3">
                            <p>{artista.name}</p>
                            <div className="conteudoDoConteudo bg-ciano h-1/3 w-4/5"></div>
                        </div>
                        </Link>
                    ))
                }
                </div>
                <div className="flex flex-row">
                <h1>Rock</h1>
                {
                    artistas
                    .filter( artista => artista.genero.includes("rock"))
                    .map( artista => (
                        <Link to= {`/artista/${artista._id}`}>
                        <div className="conteudo bg-rosa size-40 flex flex-col items-center justify-evenly py-1 m-3">
                            <p>{artista.name}</p>
                            <div className="conteudoDoConteudo bg-ciano h-1/3 w-4/5"></div>
                        </div>
                        </Link>
                    ))
                }
                </div>

            </MainConteudo>
        </Container>
    </>
     );
}

export default Home;