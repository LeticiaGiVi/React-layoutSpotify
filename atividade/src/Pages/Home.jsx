//import Conteudo from "../Componentes/conteudo";
import { useEffect, useState } from "react";
import Sidebar from "../Componentes/Sidebar";
import Container from "../Componentes/Container";
import MainConteudo from "../Componentes/MainConteudo";


function Home() {


    const [artistas,setArtistas] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then (res => res.json())
    .then (data => setArtistas(data))
    .catch (err => console.log(err))
  },[])


    return ( 
        <>
        <Container>
            <Sidebar/>
            <MainConteudo>
                {
                    artistas.map( artista => (
                        <div className="conteudo bg-rosa size-40 flex flex-col items-center justify-evenly py-1 m-3">
                            <p>{artista.name}</p>
                            <div className="conteudoDoConteudo bg-ciano h-1/3 w-4/5"></div>
                        </div>
                    ))
                }
            <div className="conteudo bg-rosa size-40 flex flex-col items-center justify-evenly py-1 m-3">
                <div className="conteudoDoConteudo bg-ciano h-1/3 w-4/5"></div>
                <div className="conteudoDoConteudo bg-ciano h-1/3 w-4/5"></div>
            </div>
            </MainConteudo>
        </Container>
    </>
     );
}

export default Home;