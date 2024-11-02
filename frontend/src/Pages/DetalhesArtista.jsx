import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalhesArtista() {

    const {id} = useParams()
    const [artista, setArtista] = useState({})
    useEffect(() => {
            const puxarArtista = async () => {
        try{
            const artista = await fetch(`http://localhost:3000/artistas/${id}`);
            const resposta = await artista.json();
            setArtista(resposta);
            }
        catch (error) {
                console.error('Error fetching data:', error);
        }
    }
    puxarArtista();

    },[])
   
    return (
        <>
        <p>{artista.name}</p>
            {/* <div className="relative bg-gradient-to-b from-black to-transparent h-64 flex items-center justify-center text-center text-white">
                <img
                    src={artista.banner}
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">{artista.name}</h1>
                    <p className="mt-2 text-lg">{artista.descricao}</p>
                </div>
            </div> */}
        </>
    );
}