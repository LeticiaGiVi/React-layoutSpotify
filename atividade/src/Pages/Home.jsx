import Conteudo from "../Componentes/conteudo";
import Sidebar from "../Componentes/Sidebar";
import Container from "../Componentes/Container";
import MainConteudo from "../Componentes/MainConteudo";


function Home() {

    return ( 
        <>
        <Container>
            <Sidebar/>
            <MainConteudo>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            </MainConteudo>
            {/* <div className=" w-full h-full flex flex-row flex-wrap p-16 justify-evenly">
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            <Conteudo/>
            </div> */}
        </Container>
        {/* <div className='tudo h-lvh flex flex-col'>

            <div className='MenuEConteudo flex flex-row w-full h-full'>

            </div>
        </div> */}
    </>
     );
}

export default Home;